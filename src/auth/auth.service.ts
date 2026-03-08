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

  /* ══════════════════════════════════════════
     VALIDER L'EMAIL + MOT DE PASSE
     Appelé par LocalStrategy.validate()
     Retourne le user sans password ou null
  ══════════════════════════════════════════ */
  async validateUser(email: string, password: string) {
    // findByEmail retourne le password pour bcrypt.compare
    const user = await this.usersService.findByEmail(email);

    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    // On retire le password avant de retourner
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /* ══════════════════════════════════════════
     REGISTER — Créer un compte
     POST /api/auth/register
  ══════════════════════════════════════════ */
  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    // UsersService.create() gère déjà les conflits email/pseudo
    const user = await this.usersService.create({
      pseudo:   dto.pseudo,
      email:    dto.email,
      password: dto.password,
      ffid:     dto.ffid,
    });

    // Génère le token JWT directement après l'inscription
    const token = this.generateToken(user.id, user.email, user.role);

    return {
      access_token: token,
      user,
    };
  }

  /* ══════════════════════════════════════════
     LOGIN — Se connecter
     POST /api/auth/login
     Le user est déjà validé par LocalStrategy
  ══════════════════════════════════════════ */
  async login(user: any): Promise<AuthResponseDto> {
    const token = this.generateToken(user.id, user.email, user.role);

    return {
      access_token: token,
      user,
    };
  }

  /* ══════════════════════════════════════════
     ME — Profil du user connecté
     GET /api/auth/me
  ══════════════════════════════════════════ */
  async me(userId: number) {
    return this.usersService.findOne(userId);
  }

  /* ══════════════════════════════════════════
     HELPER — Génère le JWT
  ══════════════════════════════════════════ */
  private generateToken(id: number, email: string, role: string): string {
    const payload = {
      sub:   id,     // subject = id du user
      email,
      role,
    };

    return this.jwtService.sign(payload);
  }
}