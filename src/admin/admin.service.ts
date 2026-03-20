import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTournamentDto } from './validators/create-tournament.dto';
import { CreateMatchDto } from './validators/create-match.dto';
import { UpdateMatchDto } from './validators/update-match.dto';
import { AddResultsDto } from './validators/add-results.dto';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  /* ══════════════════════════════════════════
     DASHBOARD STATS
  ══════════════════════════════════════════ */
  async getStats() {
    const [totalUsers, totalTournaments, activeTournament, recentRegistrations] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.tournament.count(),
        this.prisma.tournament.findFirst({
          where:   { status: { in: ['OPEN', 'SOON', 'ONGOING'] } },
          include: { _count: { select: { registrations: true } } },
        }),
        this.prisma.registration.findMany({
          take:    5,
          orderBy: { createdAt: 'desc' },
          include: { user: true, tournament: true },
        }),
      ]);

    const totalRevenue = await this.prisma.tournament.aggregate({
      _sum: { entry_fee: true },
    });

    return {
      totalUsers,
      totalTournaments,
      activeTournament,
      recentRegistrations,
      totalRevenue: totalRevenue._sum.entry_fee || 0,
    };
  }

  /* ══════════════════════════════════════════
     TOURNOIS
  ══════════════════════════════════════════ */
  async getAllTournaments() {
    return this.prisma.tournament.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { registrations: true } } },
    });
  }

  async createTournament(dto: CreateTournamentDto) {
    return this.prisma.tournament.create({
      data: {
        title:                 dto.title,
        description:           dto.description,
        game_mode:             dto.game_mode,
        max_players:           dto.max_players,
        entry_fee:             dto.entry_fee,
        prize_pool:            dto.prize_pool,
        start_at:              new Date(dto.start_at),
        registration_deadline: new Date(dto.registration_deadline),
        status:                'SOON',
        current_players:       0,
      },
    });
  }

  async updateTournamentStatus(id: number, status: string) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id } });
    if (!tournament) throw new NotFoundException('Tournoi introuvable');
    return this.prisma.tournament.update({ where: { id }, data: { status: status as any } });
  }

  async getTournamentRegistrations(tournamentId: number) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id: tournamentId } });
    if (!tournament) throw new NotFoundException('Tournoi introuvable');

    return this.prisma.registration.findMany({
      where:   { tournamentId },
      orderBy: { slot: 'asc' },
      include: {
        user: {
          select: { id: true, pseudo: true, email: true, ffid: true, country: true, avatar: true },
        },
      },
    });
  }

  async cancelRegistration(tournamentId: number, userId: number) {
    const registration = await this.prisma.registration.findUnique({
      where: { userId_tournamentId: { userId, tournamentId } },
    });
    if (!registration) throw new NotFoundException('Inscription introuvable');

    await this.prisma.$transaction([
      this.prisma.registration.delete({
        where: { userId_tournamentId: { userId, tournamentId } },
      }),
      this.prisma.tournament.update({
        where: { id: tournamentId },
        data:  { current_players: { decrement: 1 } },
      }),
    ]);

    await this.prisma.notification.create({
      data: {
        userId,
        title: 'Inscription annulée',
        body:  "Ton inscription au tournoi a été annulée par l'administrateur.",
        type:  'WARNING',
      },
    });

    return { message: 'Inscription annulée' };
  }

  async confirmPayment(tournamentId: number, userId: number) {
    const registration = await this.prisma.registration.findUnique({
      where: { userId_tournamentId: { userId, tournamentId } },
    });
    if (!registration) throw new NotFoundException('Inscription introuvable');

    await this.prisma.registration.update({
      where: { userId_tournamentId: { userId, tournamentId } },
      data:  { payment_status: 'CONFIRMED' },
    });

    await this.prisma.notification.create({
      data: {
        userId,
        title: '✅ Paiement confirmé !',
        body:  'Ton paiement a été validé. Tu es officiellement inscrit au tournoi. Bonne chance ! 🔥',
        type:  'SUCCESS',
      },
    });

    return { message: 'Paiement confirmé' };
  }

  /* ══════════════════════════════════════════
     MATCHS
  ══════════════════════════════════════════ */
  async getTournamentMatches(tournamentId: number) {
    return this.prisma.match.findMany({
      where:   { tournamentId },
      orderBy: { round: 'asc' },
      include: { results: { include: { user: { select: { id: true, pseudo: true, avatar: true } } } } },
    });
  }

  async createMatch(dto: CreateMatchDto) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id: dto.tournamentId } });
    if (!tournament) throw new NotFoundException('Tournoi introuvable');

    return this.prisma.match.create({
      data: {
        tournamentId:  dto.tournamentId,
        round:         dto.round,
        map:           dto.map,
        room_id:       dto.room_id,
        room_password: dto.room_password,
        scheduled_at:  new Date(dto.scheduled_at),
        status:        'PENDING',
      },
    });
  }

  async updateMatch(matchId: number, dto: UpdateMatchDto) {
    const match = await this.prisma.match.findUnique({ where: { id: matchId } });
    if (!match) throw new NotFoundException('Match introuvable');

    const updated = await this.prisma.match.update({
      where: { id: matchId },
      data: {
        status:        dto.status as any,
        room_id:       dto.room_id       ?? match.room_id,
        room_password: dto.room_password ?? match.room_password,
        started_at:    dto.status === 'LIVE'     ? new Date() : match.started_at,
        finished_at:   dto.status === 'FINISHED' ? new Date() : match.finished_at,
      },
    });

    if (dto.status === 'LIVE') {
      const registrations = await this.prisma.registration.findMany({
        where: { tournamentId: match.tournamentId },
      });
      await this.prisma.notification.createMany({
        data: registrations.map((r) => ({
          userId: r.userId,
          title:  `🔴 Manche ${match.round} — LIVE !`,
          body:   `Le match vient de commencer sur ${match.map}. Bonne chance !`,
          type:   'INFO' as any,
        })),
      });
    }

    return updated;
  }

  /* ══════════════════════════════════════════
     RÉSULTATS
  ══════════════════════════════════════════ */
  async addResults(matchId: number, dto: AddResultsDto) {
    const match = await this.prisma.match.findUnique({ where: { id: matchId } });
    if (!match) throw new NotFoundException('Match introuvable');

    if (match.status !== 'FINISHED') {
      throw new BadRequestException('Le match doit être terminé pour saisir les résultats');
    }

    const results = await Promise.all(
      dto.results.map((r) =>
        this.prisma.matchResult.upsert({
          where:  { matchId_userId: { matchId, userId: r.userId } },
          create: { matchId, userId: r.userId, placement: r.placement, kills: r.kills, points: r.points },
          update: { placement: r.placement, kills: r.kills, points: r.points },
        })
      )
    );

    await Promise.all(
      dto.results.map((r) =>
        this.prisma.user.update({
          where: { id: r.userId },
          data:  { points: { increment: r.points } },
        })
      )
    );

    return results;
  }

  async getMatchResults(matchId: number) {
    return this.prisma.matchResult.findMany({
      where:   { matchId },
      orderBy: { placement: 'asc' },
      include: { user: { select: { id: true, pseudo: true, avatar: true, ffid: true } } },
    });
  }

  /* ══════════════════════════════════════════
     NOTIFICATION BROADCAST
  ══════════════════════════════════════════ */
  async broadcastNotification(tournamentId: number, title: string, body: string) {
    const registrations = await this.prisma.registration.findMany({
      where: { tournamentId },
    });

    if (registrations.length === 0) {
      throw new BadRequestException('Aucun joueur inscrit à ce tournoi');
    }

    await this.prisma.notification.createMany({
      data: registrations.map((r) => ({
        userId: r.userId,
        title,
        body,
        type: 'INFO' as any,
      })),
    });

    return { message: `Notification envoyée à ${registrations.length} joueurs` };
  }

  /* ══════════════════════════════════════════
     CLASSEMENT — CALCULER & SAUVEGARDER
  ══════════════════════════════════════════ */
  async computeRanking(tournamentId: number) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id: tournamentId } });
    if (!tournament) throw new NotFoundException('Tournoi introuvable');

    const results = await this.prisma.matchResult.findMany({
      where:  { match: { tournamentId } },
      select: { userId: true, points: true },
    });

    if (results.length === 0) {
      throw new BadRequestException('Aucun résultat enregistré pour ce tournoi');
    }

    const totals = new Map<number, number>();
    for (const r of results) {
      totals.set(r.userId, (totals.get(r.userId) || 0) + r.points);
    }

    const sorted = Array.from(totals.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([userId, totalPoints], index) => ({
        userId,
        totalPoints,
        position: index + 1,
      }));

    await this.prisma.$transaction([
      this.prisma.tournamentRanking.deleteMany({ where: { tournamentId } }),
      this.prisma.tournamentRanking.createMany({
        data: sorted.map((r) => ({
          tournamentId,
          userId:      r.userId,
          totalPoints: r.totalPoints,
          position:    r.position,
        })),
      }),
    ]);

    return { message: `Classement calculé — ${sorted.length} joueurs classés` };
  }

  /* ══════════════════════════════════════════
     CLASSEMENT — RÉCUPÉRER
  ══════════════════════════════════════════ */
  async getRanking(tournamentId: number) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id: tournamentId } });
    if (!tournament) throw new NotFoundException('Tournoi introuvable');

    return this.prisma.tournamentRanking.findMany({
      where:   { tournamentId },
      orderBy: { position: 'asc' },
      include: {
        user: { select: { id: true, pseudo: true, avatar: true, country: true } },
      },
    });
  }
}