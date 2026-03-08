import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from 'src/users/validator/user-response.dto';

export class AuthResponseDto {
  @ApiProperty({
    description: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  access_token: string;

  @ApiProperty({
    description: 'Informations du user connecté',
    type: UserResponseDto,
  })
  user: UserResponseDto;
}