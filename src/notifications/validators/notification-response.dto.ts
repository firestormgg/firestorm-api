import { ApiProperty } from '@nestjs/swagger';

export class NotificationResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Inscription confirmée ✅' })
  title: string;

  @ApiProperty({ example: 'Tu es inscrit au tournoi "FIRE STORM CUP #18" — Slot #3' })
  body: string;

  @ApiProperty({ enum: ['INFO', 'SUCCESS', 'WARNING', 'DANGER'], example: 'SUCCESS' })
  type: string;

  @ApiProperty({ example: false })
  read: boolean;

  @ApiProperty({ example: '2026-03-04T20:00:00.000Z' })
  createdAt: Date;
}