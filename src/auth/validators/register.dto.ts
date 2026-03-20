import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'Pseudo unique du joueur', example: 'KillSwitch_FF' })
  @IsString()
  @IsNotEmpty({ message: 'Le pseudo est requis' })
  @MinLength(3,  { message: 'Le pseudo doit contenir au moins 3 caractères' })
  @MaxLength(20, { message: 'Le pseudo ne peut pas dépasser 20 caractères' })
  pseudo: string;

  @ApiProperty({ description: 'Adresse email', example: 'killswitch@firestorm.gg' })
  @IsEmail({}, { message: 'Adresse email invalide' })
  @IsNotEmpty({ message: "L'email est requis" })
  email: string;

  @ApiProperty({ description: 'Mot de passe — min 8 caractères, 1 majuscule, 1 chiffre', example: 'FireStorm123' })
  @IsString()
  @IsNotEmpty({ message: 'Le mot de passe est requis' })
  @MinLength(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Le mot de passe doit contenir au moins 1 majuscule et 1 chiffre',
  })
  password: string;

  @ApiPropertyOptional({ description: 'ID Free Fire du joueur', example: '12345678' })
  @IsString()
  @IsOptional()
  ffid?: string;

  @ApiPropertyOptional({ description: 'Pays du joueur', example: "Côte d'Ivoire" })
  @IsString()
  @IsOptional()
  country?: string;
}