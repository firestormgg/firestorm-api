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
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const match_service_1 = require("./match.service");
const checkin_response_dto_1 = require("./validators/checkin-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let MatchController = class MatchController {
    matchesService;
    constructor(matchesService) {
        this.matchesService = matchesService;
    }
    async getNext() {
        return this.matchesService.getNext();
    }
    async checkRegistration(req) {
        return this.matchesService.checkRegistration(req.user.id);
    }
    async checkIn(id, req) {
        return this.matchesService.checkIn(id, req.user.id);
    }
};
exports.MatchController = MatchController;
__decorate([
    (0, common_1.Get)('next'),
    (0, swagger_1.ApiOperation)({ summary: 'Prochain match', description: 'Retourne le prochain match PENDING ou LIVE' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Match trouvé' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Aucun match à venir' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getNext", null);
__decorate([
    (0, common_1.Get)('check-registration'),
    (0, swagger_1.ApiOperation)({ summary: 'Vérifier inscription', description: 'Retourne { registered: true/false }' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { registered: true } } }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "checkRegistration", null);
__decorate([
    (0, common_1.Patch)(':id/checkin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Check in',
        description: 'Disponible 1h avant. Retourne room_id + password + envoie une notification.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du match', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Check in confirmé', type: checkin_response_dto_1.CheckInResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Fenêtre fermée / room non disponible' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Non inscrit au tournoi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Match introuvable' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "checkIn", null);
exports.MatchController = MatchController = __decorate([
    (0, swagger_1.ApiTags)('Matches'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('matches'),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
//# sourceMappingURL=match.controller.js.map