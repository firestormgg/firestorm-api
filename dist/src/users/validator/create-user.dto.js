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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
    pseudo;
    email;
    password;
    ffid;
    avatar;
    country;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pseudo unique du joueur',
        example: 'KillSwitch_FF',
        minLength: 3,
        maxLength: 20,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, { message: 'Le pseudo doit contenir au moins 3 caractères' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Le pseudo ne peut pas dépasser 20 caractères' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "pseudo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adresse email du joueur',
        example: 'killswitch@firestorm.gg',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Adresse email invalide' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mot de passe — min 8 caractères, au moins 1 majuscule, 1 chiffre',
        example: 'FireStorm123',
        minLength: 8,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Z])(?=.*\d).+$/, {
        message: 'Le mot de passe doit contenir au moins 1 majuscule et 1 chiffre',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID Free Fire du joueur',
        example: '12345678',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "ffid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL de la photo de profil',
        example: 'https://cdn.firestorm.gg/avatars/killswitch.jpg',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pays du joueur',
        example: 'Côte d\'Ivoire',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
//# sourceMappingURL=create-user.dto.js.map