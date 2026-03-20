import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateMatchDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  tournamentId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  round: number;

  @ApiProperty({ example: 'Bermuda' })
  @IsString()
  @IsNotEmpty()
  map: string;

  @ApiPropertyOptional({ example: '123456' })
  @IsString()
  @IsOptional()
  room_id?: string;

  @ApiPropertyOptional({ example: 'fire123' })
  @IsString()
  @IsOptional()
  room_password?: string;

  @ApiProperty({ example: '2026-03-10T20:00:00.000Z' })
  @IsDateString()
  scheduled_at: string;
}