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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./validator/update-user.dto");
const user_response_dto_1 = require("./validator/user-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const enums_1 = require("../../generated/prisma/enums");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_2 = require("@nestjs/swagger");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getMyRegistrations(req) {
        const user = await this.usersService.findWithRegistrations(req.user.id);
        return user.registrations;
    }
    async uploadAvatar(req, file) {
        return this.usersService.uploadAvatar(req.user.id, file);
    }
    async getMe(req) {
        return this.usersService.findOne(req.user.id);
    }
    async getMyTournaments(req) {
        return this.usersService.findWithRegistrations(req.user.id);
    }
    async updateMe(req, dto) {
        return this.usersService.update(req.user.id, dto);
    }
    async deleteMe(req) {
        return this.usersService.remove(req.user.id);
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findOne(id) {
        return this.usersService.findOne(id);
    }
    async update(id, dto) {
        return this.usersService.update(id, dto);
    }
    async remove(id) {
        return this.usersService.remove(id);
    }
    async updateStats(id, stats) {
        return this.usersService.updateStats(id, stats);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('me/registrations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Mes tournois', description: 'Retourne les inscriptions du user connecté avec les infos des tournois' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Inscriptions récupérées' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMyRegistrations", null);
__decorate([
    (0, common_1.Post)('me/avatar'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, swagger_2.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload avatar', description: 'Upload vers Supabase Storage' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Avatar mis à jour', schema: { example: { avatar: 'https://...' } } }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_2.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadAvatar", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({
        summary: 'Mon profil',
        description: 'Retourne les infos du user actuellement connecté',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profil récupéré', type: user_response_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)('me/tournaments'),
    (0, swagger_1.ApiOperation)({
        summary: 'Mes tournois',
        description: 'Retourne tous les tournois auxquels le user est inscrit',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Inscriptions récupérées' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMyTournaments", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, swagger_1.ApiOperation)({
        summary: 'Modifier mon profil',
        description: 'Met à jour les infos du user connecté (pseudo, avatar, ffid...)',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profil mis à jour', type: user_response_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Pseudo déjà pris' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMe", null);
__decorate([
    (0, common_1.Delete)('me'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Supprimer mon compte',
        description: 'Supprime définitivement le compte du user connecté',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Compte supprimé' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteMe", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: '[ADMIN] Tous les utilisateurs',
        description: 'Retourne la liste complète des utilisateurs — Admin seulement',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste récupérée', type: [user_response_dto_1.UserResponseDto] }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Accès refusé — Admin requis' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: '[ADMIN] Un utilisateur par ID',
        description: 'Retourne les infos d\'un utilisateur — Admin seulement',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'utilisateur', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur trouvé', type: user_response_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Accès refusé — Admin requis' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Utilisateur introuvable' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: '[ADMIN] Modifier un utilisateur',
        description: 'Met à jour les infos d\'un utilisateur — Admin seulement',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'utilisateur', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur mis à jour', type: user_response_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Accès refusé — Admin requis' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Utilisateur introuvable' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: '[ADMIN] Supprimer un utilisateur',
        description: 'Supprime définitivement un utilisateur — Admin seulement',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'utilisateur', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Utilisateur supprimé' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Accès refusé — Admin requis' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Utilisateur introuvable' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/stats'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: '[ADMIN] Mettre à jour les stats',
        description: 'Met à jour rank, points et wins d\'un joueur — Admin seulement',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'utilisateur', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Stats mises à jour', type: user_response_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non authentifié' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Accès refusé — Admin requis' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Utilisateur introuvable' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateStats", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map