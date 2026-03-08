import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

/* PartialType rend tous les champs de CreateUserDto optionnels
   et hérite automatiquement des decorators Swagger + validators */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: 'Nouveau pseudo',
    example: 'KillSwitch_v2',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(20)
  pseudo?: string;

  @ApiPropertyOptional({
    description: 'Nouveau mot de passe',
    example: 'NewPassword123',
    minLength: 8,
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Le mot de passe doit contenir au moins 1 majuscule et 1 chiffre',
  })
  password?: string;

  @ApiPropertyOptional({
    description: 'ID Free Fire',
    example: '87654321',
  })
  @IsString()
  @IsOptional()
  ffid?: string;

  @ApiPropertyOptional({
    description: 'URL de la photo de profil',
    example: 'https://cdn.firestorm.gg/avatars/new-avatar.jpg',
  })
  @IsString()
  @IsOptional()
  avatar?: string;
}