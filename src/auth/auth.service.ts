import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './validators/register.dto';
import { LoginDto } from './validators/login.dto';
import { AuthResponseDto } from './validators/auth-response.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    const user = await this.usersService.create({
      pseudo:   dto.pseudo,
      email:    dto.email,
      password: dto.password,
      ffid:     dto.ffid,
      country:  dto.country,   // ← ajouté
    });
    const token = this.generateToken(user.id, user.email, (user as any).role);
    return { access_token: token, user };
  }

  async login(user: any): Promise<AuthResponseDto> {
    const token = this.generateToken(user.id, user.email, user.role);
    return { access_token: token, user };
  }

  async me(userId: number) {
    return this.usersService.findOne(userId);
  }

  private generateToken(id: number, email: string, role: string): string {
    return this.jwtService.sign({ sub: id, email, role });
  }
}