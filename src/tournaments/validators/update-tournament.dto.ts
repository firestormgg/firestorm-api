import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class UpdateTournamentDto {
  @ApiProperty({ description: 'ID du tournoi', example: 1 })
  @IsInt()
  @IsPositive()
  tournamentId: number;
}