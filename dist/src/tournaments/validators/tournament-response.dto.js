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
exports.TournamentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TournamentResponseDto {
    id;
    title;
    description;
    game_mode;
    max_players;
    current_players;
    entry_fee;
    prize_pool;
    status;
    start_at;
    registration_deadline;
    createdAt;
    updatedAt;
}
exports.TournamentResponseDto = TournamentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], TournamentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'FIRE STORM CUP #18' }),
    __metadata("design:type", String)
], TournamentResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Le tournoi Free Fire le plus intense...' }),
    __metadata("design:type", Object)
], TournamentResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SOLO BR' }),
    __metadata("design:type", String)
], TournamentResponseDto.prototype, "game_mode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], TournamentResponseDto.prototype, "max_players", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 72 }),
    __metadata("design:type", Number)
], TournamentResponseDto.prototype, "current_players", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], TournamentResponseDto.prototype, "entry_fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200000 }),
    __metadata("design:type", Number)
], TournamentResponseDto.prototype, "prize_pool", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['OPEN', 'SOON', 'FULL', 'ONGOING', 'FINISHED'], example: 'OPEN' }),
    __metadata("design:type", String)
], TournamentResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-15T20:00:00.000Z' }),
    __metadata("design:type", Date)
], TournamentResponseDto.prototype, "start_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-15T18:00:00.000Z' }),
    __metadata("design:type", Date)
], TournamentResponseDto.prototype, "registration_deadline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], TournamentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], TournamentResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=tournament-response.dto.js.map