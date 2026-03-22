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
exports.TournamentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tournaments_service_1 = require("./tournaments.service");
const tournament_response_dto_1 = require("./validators/tournament-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let TournamentsController = class TournamentsController {
    tournamentsService;
    constructor(tournamentsService) {
        this.tournamentsService = tournamentsService;
    }
    async getActive() {
        return this.tournamentsService.getActive();
    }
    async getRanking(id) {
        return this.tournamentsService.getRanking(id);
    }
    async register(id, req) {
        return this.tournamentsService.register(id, req.user.id);
    }
};
exports.TournamentsController = TournamentsController;
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Tournoi actif', description: 'Retourne le tournoi actif ou terminé le plus récent' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tournoi récupéré', type: tournament_response_dto_1.TournamentResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Aucun tournoi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "getActive", null);
__decorate([
    (0, common_1.Get)(':id/ranking'),
    (0, swagger_1.ApiOperation)({ summary: 'Classement public d\'un tournoi' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du tournoi', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classement récupéré' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tournoi introuvable' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "getRanking", null);
__decorate([
    (0, common_1.Patch)(':id/register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: "S'inscrire au tournoi" }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du tournoi', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Inscription confirmée' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Inscriptions fermées / complet / deadline passée' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tournoi introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Déjà inscrit' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "register", null);
exports.TournamentsController = TournamentsController = __decorate([
    (0, swagger_1.ApiTags)('Tournaments'),
    (0, common_1.Controller)('tournaments'),
    __metadata("design:paramtypes", [tournaments_service_1.TournamentsService])
], TournamentsController);
//# sourceMappingURL=tournaments.controller.js.map