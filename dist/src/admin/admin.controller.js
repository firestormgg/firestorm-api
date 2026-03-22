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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const create_tournament_dto_1 = require("./validators/create-tournament.dto");
const create_match_dto_1 = require("./validators/create-match.dto");
const update_match_dto_1 = require("./validators/update-match.dto");
const add_results_dto_1 = require("./validators/add-results.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const enums_1 = require("../../generated/prisma/enums");
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async getStats() {
        return this.adminService.getStats();
    }
    async getAllTournaments() {
        return this.adminService.getAllTournaments();
    }
    async createTournament(dto) {
        return this.adminService.createTournament(dto);
    }
    async updateTournamentStatus(id, body) {
        return this.adminService.updateTournamentStatus(id, body.status);
    }
    async getRegistrations(id) {
        return this.adminService.getTournamentRegistrations(id);
    }
    async cancelRegistration(id, userId) {
        return this.adminService.cancelRegistration(id, userId);
    }
    async confirmPayment(id, userId) {
        return this.adminService.confirmPayment(id, userId);
    }
    async broadcastNotification(id, body) {
        return this.adminService.broadcastNotification(id, body.title, body.body);
    }
    async computeRanking(id) {
        return this.adminService.computeRanking(id);
    }
    async getRanking(id) {
        return this.adminService.getRanking(id);
    }
    async getTournamentMatches(id) {
        return this.adminService.getTournamentMatches(id);
    }
    async createMatch(dto) {
        return this.adminService.createMatch(dto);
    }
    async updateMatch(id, dto) {
        return this.adminService.updateMatch(id, dto);
    }
    async getMatchResults(id) {
        return this.adminService.getMatchResults(id);
    }
    async addResults(id, dto) {
        return this.adminService.addResults(id, dto);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Dashboard stats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('tournaments'),
    (0, swagger_1.ApiOperation)({ summary: 'Tous les tournois' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllTournaments", null);
__decorate([
    (0, common_1.Post)('tournaments'),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un tournoi' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tournoi créé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_dto_1.CreateTournamentDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createTournament", null);
__decorate([
    (0, common_1.Patch)('tournaments/:id/status'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Changer le status du tournoi' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateTournamentStatus", null);
__decorate([
    (0, common_1.Get)('tournaments/:id/registrations'),
    (0, swagger_1.ApiOperation)({ summary: 'Joueurs inscrits à un tournoi' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getRegistrations", null);
__decorate([
    (0, common_1.Delete)('tournaments/:id/registrations/:userId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: "Annuler l'inscription d'un joueur" }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    (0, swagger_1.ApiParam)({ name: 'userId', example: 2 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "cancelRegistration", null);
__decorate([
    (0, common_1.Patch)('tournaments/:id/registrations/:userId/confirm'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Confirmer le paiement d\'un joueur' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    (0, swagger_1.ApiParam)({ name: 'userId', example: 2 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "confirmPayment", null);
__decorate([
    (0, common_1.Post)('tournaments/:id/notify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Envoyer une notification à tous les inscrits' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "broadcastNotification", null);
__decorate([
    (0, common_1.Post)('tournaments/:id/ranking'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Calculer et sauvegarder le classement' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "computeRanking", null);
__decorate([
    (0, common_1.Get)('tournaments/:id/ranking'),
    (0, swagger_1.ApiOperation)({ summary: "Récupérer le classement d'un tournoi" }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getRanking", null);
__decorate([
    (0, common_1.Get)('tournaments/:id/matches'),
    (0, swagger_1.ApiOperation)({ summary: "Matchs d'un tournoi" }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getTournamentMatches", null);
__decorate([
    (0, common_1.Post)('matches'),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un match' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Match créé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_match_dto_1.CreateMatchDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createMatch", null);
__decorate([
    (0, common_1.Patch)('matches/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un match (status, room_id, room_password)' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_match_dto_1.UpdateMatchDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateMatch", null);
__decorate([
    (0, common_1.Get)('matches/:id/results'),
    (0, swagger_1.ApiOperation)({ summary: "Résultats d'un match" }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getMatchResults", null);
__decorate([
    (0, common_1.Post)('matches/:id/results'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: "Saisir les résultats d'un match" }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_results_dto_1.AddResultsDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "addResults", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map