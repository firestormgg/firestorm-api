import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TournamentResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'FIRE STORM CUP #18' })
  title: string;

  @ApiPropertyOptional({ example: 'Le tournoi Free Fire le plus intense...' })
  description: string | null;

  @ApiProperty({ example: 'SOLO BR' })
  game_mode: string;

  @ApiProperty({ example: 100 })
  max_players: number;

  @ApiProperty({ example: 72 })
  current_players: number;

  @ApiProperty({ example: 0 })
  entry_fee: number;

  @ApiProperty({ example: 200000 })
  prize_pool: number;

  @ApiProperty({ enum: ['OPEN', 'SOON', 'FULL', 'ONGOING', 'FINISHED'], example: 'OPEN' })
  status: string;

  @ApiProperty({ example: '2025-03-15T20:00:00.000Z' })
  start_at: Date;

  @ApiProperty({ example: '2025-03-15T18:00:00.000Z' })
  registration_deadline: Date;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  updatedAt: Date;
}