import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum MatchStatus {
  PENDING  = 'PENDING',
  LIVE     = 'LIVE',
  FINISHED = 'FINISHED',
}

export class UpdateMatchDto {
  @ApiProperty({ enum: MatchStatus, example: MatchStatus.LIVE })
  @IsEnum(MatchStatus)
  status: MatchStatus;

  @ApiPropertyOptional({ example: '123456' })
  @IsString()
  @IsOptional()
  room_id?: string;

  @ApiPropertyOptional({ example: 'fire123' })
  @IsString()
  @IsOptional()
  room_password?: string;
}