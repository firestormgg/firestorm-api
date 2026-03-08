import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Pseudo unique du joueur',
    example: 'KillSwitch_FF',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Le pseudo doit contenir au moins 3 caractères' })
  @MaxLength(20, { message: 'Le pseudo ne peut pas dépasser 20 caractères' })
  pseudo: string;

  @ApiProperty({
    description: 'Adresse email du joueur',
    example: 'killswitch@firestorm.gg',
  })
  @IsEmail({}, { message: 'Adresse email invalide' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description:
      'Mot de passe — min 8 caractères, au moins 1 majuscule, 1 chiffre',
    example: 'FireStorm123',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Le mot de passe doit contenir au moins 1 majuscule et 1 chiffre',
  })
  password: string;

  @ApiPropertyOptional({
    description: 'ID Free Fire du joueur',
    example: '12345678',
  })
  @IsString()
  @IsOptional()
  ffid?: string;

  @ApiPropertyOptional({
    description: 'URL de la photo de profil',
    example: 'https://cdn.firestorm.gg/avatars/killswitch.jpg',
  })
  @IsString()
  @IsOptional()
  avatar?: string;


}