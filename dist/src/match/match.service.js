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
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MatchService = class MatchService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getNext() {
        const tournament = await this.prisma.tournament.findFirst({
            where: { status: { in: ['OPEN', 'SOON', 'ONGOING'] } },
            orderBy: { start_at: 'asc' },
        });
        if (!tournament)
            throw new common_1.NotFoundException('Aucun tournoi actif');
        const match = await this.prisma.match.findFirst({
            where: { tournamentId: tournament.id, status: { in: ['PENDING', 'LIVE'] } },
            orderBy: { scheduled_at: 'asc' },
        });
        if (!match)
            throw new common_1.NotFoundException('Aucun match à venir');
        return match;
    }
    async checkRegistration(userId) {
        const tournament = await this.prisma.tournament.findFirst({
            where: { status: { in: ['OPEN', 'SOON', 'ONGOING'] } },
            orderBy: { start_at: 'asc' },
        });
        if (!tournament)
            return { registered: false };
        const registration = await this.prisma.registration.findUnique({
            where: {
                userId_tournamentId: { userId, tournamentId: tournament.id },
            },
        });
        return { registered: !!registration };
    }
    async checkIn(matchId, userId) {
        const match = await this.prisma.match.findUnique({
            where: { id: matchId },
            include: { tournament: true },
        });
        if (!match)
            throw new common_1.NotFoundException('Match introuvable');
        const registration = await this.prisma.registration.findUnique({
            where: {
                userId_tournamentId: {
                    userId,
                    tournamentId: match.tournamentId,
                },
            },
        });
        if (!registration) {
            throw new common_1.ForbiddenException('Tu n\'es pas inscrit à ce tournoi');
        }
        if (match.status === 'FINISHED') {
            throw new common_1.BadRequestException('Ce match est déjà terminé');
        }
        if (match.status === 'LIVE') {
            throw new common_1.BadRequestException('Ce match est déjà en cours');
        }
        const now = new Date();
        const scheduled = new Date(match.scheduled_at);
        const oneHourBefore = new Date(scheduled.getTime() - 60 * 60 * 1000);
        const tenMinAfter = new Date(scheduled.getTime() + 10 * 60 * 1000);
        if (now < oneHourBefore) {
            const minutesLeft = Math.ceil((oneHourBefore.getTime() - now.getTime()) / 60000);
            throw new common_1.BadRequestException(`Le check in ouvre dans ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}`);
        }
        if (now > tenMinAfter) {
            throw new common_1.BadRequestException('La fenêtre de check in est fermée');
        }
        if (!match.room_id || !match.room_password) {
            throw new common_1.BadRequestException('Les informations de la room ne sont pas encore disponibles');
        }
        await this.prisma.notification.create({
            data: {
                userId,
                title: `🎮 Manche ${match.round} — Infos de la room`,
                body: `Map: ${match.map} | Room ID: ${match.room_id} | Password: ${match.room_password}`,
                type: 'INFO',
            },
        });
        return {
            message: 'Check in confirmé !',
            round: match.round,
            map: match.map,
            room_id: match.room_id,
            room_password: match.room_password,
        };
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MatchService);
//# sourceMappingURL=match.service.js.map