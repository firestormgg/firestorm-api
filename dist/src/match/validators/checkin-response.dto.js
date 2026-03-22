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
exports.CheckInResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CheckInResponseDto {
    message;
    round;
    map;
    room_id;
    room_password;
}
exports.CheckInResponseDto = CheckInResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Check in confirmé !' }),
    __metadata("design:type", String)
], CheckInResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CheckInResponseDto.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bermuda' }),
    __metadata("design:type", String)
], CheckInResponseDto.prototype, "map", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456' }),
    __metadata("design:type", String)
], CheckInResponseDto.prototype, "room_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fire123' }),
    __metadata("design:type", String)
], CheckInResponseDto.prototype, "room_password", void 0);
//# sourceMappingURL=checkin-response.dto.js.map