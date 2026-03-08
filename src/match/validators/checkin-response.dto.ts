import { ApiProperty } from '@nestjs/swagger';

export class CheckInResponseDto {
  @ApiProperty({ example: 'Check in confirmé !' })
  message: string;

  @ApiProperty({ example: 1 })
  round: number;

  @ApiProperty({ example: 'Bermuda' })
  map: string;

  @ApiProperty({ example: '123456' })
  room_id: string;

  @ApiProperty({ example: 'fire123' })
  room_password: string;
}