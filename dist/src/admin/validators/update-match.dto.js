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
exports.UpdateMatchDto = exports.MatchStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var MatchStatus;
(function (MatchStatus) {
    MatchStatus["PENDING"] = "PENDING";
    MatchStatus["LIVE"] = "LIVE";
    MatchStatus["FINISHED"] = "FINISHED";
})(MatchStatus || (exports.MatchStatus = MatchStatus = {}));
class UpdateMatchDto {
    status;
    room_id;
    room_password;
}
exports.UpdateMatchDto = UpdateMatchDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: MatchStatus, example: MatchStatus.LIVE }),
    (0, class_validator_1.IsEnum)(MatchStatus),
    __metadata("design:type", String)
], UpdateMatchDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '123456' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMatchDto.prototype, "room_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'fire123' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMatchDto.prototype, "room_password", void 0);
//# sourceMappingURL=update-match.dto.js.map