import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsPositive, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class PlayerResultDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  userId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  placement: number;

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(0)
  kills: number;

  @ApiProperty({ example: 120 })
  @IsInt()
  @Min(0)
  points: number;
}

export class AddResultsDto {
  @ApiProperty({ type: [PlayerResultDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlayerResultDto)
  results: PlayerResultDto[];
}