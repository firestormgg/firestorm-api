"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
let TournamentsService = class TournamentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getActive() {
        const tournament = await this.prisma.tournament.findFirst({
            where: {
                status: {
                    in: [
                        enums_1.TournamentStatus.OPEN,
                        enums_1.TournamentStatus.SOON,
                        enums_1.TournamentStatus.ONGOING,
                        enums_1.TournamentStatus.FINISHED,
                    ],
                },
            },
            orderBy: { start_at: 'asc' },
        });
        if (!tournament) {
            throw new common_1.NotFoundException('Aucun tournoi actif pour le moment');
        }
        return tournament;
    }
    async findById(id) {
        const tournament = await this.prisma.tournament.findUnique({ where: { id } });
        if (!tournament)
            throw new common_1.NotFoundException('Tournoi introuvable');
        return tournament;
    }
    async getRanking(tournamentId) {
        await this.findById(tournamentId);
        return this.prisma.tournamentRanking.findMany({
            where: { tournamentId },
            orderBy: { position: 'asc' },
            include: {
                user: { select: { id: true, pseudo: true, avatar: true, country: true } },
            },
        });
    }
    async register(tournamentId, userId) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
        });
        if (!tournament)
            throw new common_1.NotFoundException('Tournoi introuvable');
        if (tournament.status !== enums_1.TournamentStatus.OPEN) {
            throw new common_1.BadRequestException('Les inscriptions ne sont pas ouvertes');
        }
        if (tournament.current_players >= tournament.max_players) {
            throw new common_1.BadRequestException('Le tournoi est complet');
        }
        if (new Date(tournament.registration_deadline) < new Date()) {
            throw new common_1.BadRequestException("La deadline d'inscription est passée");
        }
        const existing = await this.prisma.registration.findUnique({
            where: { userId_tournamentId: { userId, tournamentId } },
        });
        if (existing)
            throw new common_1.ConflictException('Tu es déjà inscrit à ce tournoi');
        const slot = tournament.current_players + 1;
        const [registration] = await this.prisma.$transaction([
            this.prisma.registration.create({
                data: { userId, tournamentId, slot },
            }),
            this.prisma.tournament.update({
                where: { id: tournamentId },
                data: { current_players: { increment: 1 } },
            }),
            ...(slot >= tournament.max_players
                ? [this.prisma.tournament.update({
                        where: { id: tournamentId },
                        data: { status: enums_1.TournamentStatus.FULL },
                    })]
                : []),
            this.prisma.notification.create({
                data: {
                    userId,
                    title: 'Inscription confirmée ✅',
                    body: `Tu es inscrit au tournoi "${tournament.title}" — Slot #${slot}`,
                    type: 'SUCCESS',
                },
            }),
        ]);
        return {
            message: 'Inscription confirmée !',
            slot,
            tournament: await this.getActive(),
        };
    }
};
exports.TournamentsService = TournamentsService;
exports.TournamentsService = TournamentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TournamentsService);
//# sourceMappingURL=tournaments.service.js.map