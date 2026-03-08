import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MatchService {
  constructor(private readonly prisma: PrismaService) {}

  /* ══════════════════════════════════════════
     PROCHAIN MATCH
     Cherche le prochain match PENDING
     du tournoi actif (OPEN/SOON/ONGOING)
  ══════════════════════════════════════════ */
  async getNext() {
    const tournament = await this.prisma.tournament.findFirst({
      where:   { status: { in: ['OPEN', 'SOON', 'ONGOING'] } },
      orderBy: { start_at: 'asc' },
    });

    if (!tournament) throw new NotFoundException('Aucun tournoi actif');

    const match = await this.prisma.match.findFirst({
      where:   { tournamentId: tournament.id, status: { in: ['PENDING', 'LIVE'] } },
      orderBy: { scheduled_at: 'asc' },
    });

    if (!match) throw new NotFoundException('Aucun match à venir');
    return match;
    
  }

  /* ══════════════════════════════════════════
     VÉRIFIER INSCRIPTION
     Retourne si le user est inscrit
     au tournoi actif
  ══════════════════════════════════════════ */
  async checkRegistration(userId: number) {
    const tournament = await this.prisma.tournament.findFirst({
      where:   { status: { in: ['OPEN', 'SOON', 'ONGOING'] } },
      orderBy: { start_at: 'asc' },
    });

    if (!tournament) return { registered: false };

    const registration = await this.prisma.registration.findUnique({
      where: {
        userId_tournamentId: { userId, tournamentId: tournament.id },
      },
    });

    return { registered: !!registration };
  }

  /* ══════════════════════════════════════════
     CHECK IN
  ══════════════════════════════════════════ */
  async checkIn(matchId: number, userId: number) {
    const match = await this.prisma.match.findUnique({
      where:   { id: matchId },
      include: { tournament: true },
    });

    if (!match) throw new NotFoundException('Match introuvable');

    const registration = await this.prisma.registration.findUnique({
      where: {
        userId_tournamentId: {
          userId,
          tournamentId: match.tournamentId,
        },
      },
    });

    if (!registration) {
      throw new ForbiddenException('Tu n\'es pas inscrit à ce tournoi');
    }

    if (match.status === 'FINISHED') {
      throw new BadRequestException('Ce match est déjà terminé');
    }

    if (match.status === 'LIVE') {
      throw new BadRequestException('Ce match est déjà en cours');
    }

    const now            = new Date();
    const scheduled      = new Date(match.scheduled_at);
    const oneHourBefore  = new Date(scheduled.getTime() - 60 * 60 * 1000);
    const tenMinAfter    = new Date(scheduled.getTime() + 10 * 60 * 1000);

    if (now < oneHourBefore) {
      const minutesLeft = Math.ceil((oneHourBefore.getTime() - now.getTime()) / 60000);
      throw new BadRequestException(
        `Le check in ouvre dans ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}`
      );
    }

    if (now > tenMinAfter) {
      throw new BadRequestException('La fenêtre de check in est fermée');
    }

    if (!match.room_id || !match.room_password) {
      throw new BadRequestException(
        'Les informations de la room ne sont pas encore disponibles'
      );
    }

    await this.prisma.notification.create({
      data: {
        userId,
        title: `🎮 Manche ${match.round} — Infos de la room`,
        body:  `Map: ${match.map} | Room ID: ${match.room_id} | Password: ${match.room_password}`,
        type:  'INFO',
      },
    });

    return {
      message:       'Check in confirmé !',
      round:         match.round,
      map:           match.map,
      room_id:       match.room_id,
      room_password: match.room_password,
    };
  }
}