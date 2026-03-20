import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateTournamentDto {
  @ApiProperty({ example: 'FIRE STORM CUP #19' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: 'Le tournoi le plus intense de la saison' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'SOLO', enum: ['SOLO', 'DUO', 'SQUAD'] })
  @IsString()
  @IsNotEmpty()
  game_mode: string;

  @ApiProperty({ example: 48 })
  @IsInt()
  @IsPositive()
  max_players: number;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @Min(0)
  entry_fee: number;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  @Min(0)
  prize_pool: number;

  @ApiProperty({ example: '2026-03-10T20:00:00.000Z' })
  @IsDateString()
  start_at: string;

  @ApiProperty({ example: '2026-03-10T19:00:00.000Z' })
  @IsDateString()
  registration_deadline: string;
}