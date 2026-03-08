import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TournamentStatus } from 'generated/prisma/enums';

@Injectable()
export class TournamentsService {
  constructor(private readonly prisma: PrismaService) {}

  /* ══════════════════════════════════════════
     GET TOURNOI ACTIF
     Retourne le premier tournoi avec status
     OPEN ou SOON — celui que le front affiche
  ══════════════════════════════════════════ */
  async getActive() {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        status: {
          in: [TournamentStatus.OPEN, TournamentStatus.SOON, TournamentStatus.ONGOING],
        },
      },
      orderBy: { start_at: 'asc' },
    });

    if (!tournament) {
      throw new NotFoundException('Aucun tournoi actif pour le moment');
    }

    return tournament;
  }

  /* ══════════════════════════════════════════
     INSCRIRE UN JOUEUR
     Vérifie toutes les conditions puis
     incrémente current_players
  ══════════════════════════════════════════ */
  async register(tournamentId: number, userId: number) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
    });

    if (!tournament) {
      throw new NotFoundException('Tournoi introuvable');
    }

    // Vérifications
    if (tournament.status !== TournamentStatus.OPEN) {
      throw new BadRequestException('Les inscriptions ne sont pas ouvertes');
    }

    if (tournament.current_players >= tournament.max_players) {
      throw new BadRequestException('Le tournoi est complet');
    }

    if (new Date(tournament.registration_deadline) < new Date()) {
      throw new BadRequestException('La deadline d\'inscription est passée');
    }

    // Vérifie si déjà inscrit
    const existing = await this.prisma.registration.findUnique({
      where: {
        userId_tournamentId: {
          userId,
          tournamentId,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Tu es déjà inscrit à ce tournoi');
    }

    // Numéro de slot
    const slot = tournament.current_players + 1;

    // Transaction — inscription + incrément + status si complet
    const [registration] = await this.prisma.$transaction([

      // 1. Créer l'inscription
      this.prisma.registration.create({
        data: { userId, tournamentId, slot },
      }),

      // 2. Incrémenter current_players
      this.prisma.tournament.update({
        where: { id: tournamentId },
        data:  { current_players: { increment: 1 } },
      }),

      // 3. Passer status à FULL si complet
      ...(slot >= tournament.max_players
        ? [this.prisma.tournament.update({
            where: { id: tournamentId },
            data:  { status: TournamentStatus.FULL },
          })]
        : []
      ),

      // 4. Créer une notification pour le user
      this.prisma.notification.create({
        data: {
          userId,
          title: 'Inscription confirmée ✅',
          body:  `Tu es inscrit au tournoi "${tournament.title}" — Slot #${slot}`,
          type:  'SUCCESS',
        },
      }),
    ]);

    return {
      message:  'Inscription confirmée !',
      slot,
      tournament: await this.getActive(),
    };
  }
}