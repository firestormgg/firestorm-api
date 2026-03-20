import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from 'generated/prisma/enums';

/* ══════════════════════════════════════════
   USER RESPONSE DTO
   Ce que l'API retourne — jamais le password
   Utilisé comme @ApiResponse dans les controllers
══════════════════════════════════════════ */
export class UserResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'KillSwitch_FF' })
  pseudo: string;

  @ApiProperty({ example: 'killswitch@firestorm.gg' })
  email: string;

  @ApiPropertyOptional({ example: '12345678' })
  ffid: string | null;

  @ApiPropertyOptional({ example: 'https://cdn.firestorm.gg/avatars/killswitch.jpg' })
  avatar: string | null;

  @ApiProperty({ enum: Role, example: Role.USER })
  role: Role;

  @ApiProperty({ example: 47 })
  rank: number;

  @ApiProperty({ example: 84 })
  points: number;

  @ApiProperty({ example: 3 })
  wins: number;

  @ApiProperty({ example: '2025-03-15T20:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-03-15T20:00:00.000Z' })
  updatedAt: Date;
}