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
  ══════════════════════════════════════════ */
  async getActive() {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        status: {
          in: [
            TournamentStatus.OPEN,
            TournamentStatus.SOON,
            TournamentStatus.ONGOING,
            TournamentStatus.FINISHED,
          ],
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
     GET TOURNOI PAR ID
  ══════════════════════════════════════════ */
  async findById(id: number) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id } });
    if (!tournament) throw new NotFoundException('Tournoi introuvable');
    return tournament;
  }

  /* ══════════════════════════════════════════
     GET CLASSEMENT PUBLIC
  ══════════════════════════════════════════ */
  async getRanking(tournamentId: number) {
    await this.findById(tournamentId);

    return this.prisma.tournamentRanking.findMany({
      where:   { tournamentId },
      orderBy: { position: 'asc' },
      include: {
        user: { select: { id: true, pseudo: true, avatar: true, country: true } },
      },
    });
  }

  /* ══════════════════════════════════════════
     INSCRIRE UN JOUEUR
  ══════════════════════════════════════════ */
  async register(tournamentId: number, userId: number) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
    });

    if (!tournament) throw new NotFoundException('Tournoi introuvable');

    if (tournament.status !== TournamentStatus.OPEN) {
      throw new BadRequestException('Les inscriptions ne sont pas ouvertes');
    }

    if (tournament.current_players >= tournament.max_players) {
      throw new BadRequestException('Le tournoi est complet');
    }

    if (new Date(tournament.registration_deadline) < new Date()) {
      throw new BadRequestException("La deadline d'inscription est passée");
    }

    const existing = await this.prisma.registration.findUnique({
      where: { userId_tournamentId: { userId, tournamentId } },
    });

    if (existing) throw new ConflictException('Tu es déjà inscrit à ce tournoi');

    const slot = tournament.current_players + 1;

    const [registration] = await this.prisma.$transaction([
      this.prisma.registration.create({
        data: { userId, tournamentId, slot },
      }),
      this.prisma.tournament.update({
        where: { id: tournamentId },
        data:  { current_players: { increment: 1 } },
      }),
      ...(slot >= tournament.max_players
        ? [this.prisma.tournament.update({
            where: { id: tournamentId },
            data:  { status: TournamentStatus.FULL },
          })]
        : []
      ),
      this.prisma.notification.create({
        data: {
          userId,
          title: "Demande d'inscription reçue 📝",
          body: `Ta demande pour le tournoi "${tournament.title}" (Slot #${slot}) a bien été enregistrée. 
                  Elle sera validée après paiement, dans un délai maximum de 24h.`,
          type: "INFO",
        }
      }),
    ]);

    return {
      message:    "Demande d'inscription reçue !",
      slot,
      tournament: await this.getActive(),
    };
  }
}