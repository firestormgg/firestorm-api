import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import "dotenv/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      /* ── Extrait le token depuis le header Authorization: Bearer <token> ── */
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')!,
    });
  }

  /* ══════════════════════════════════════════
     Appelé automatiquement après vérification
     du token. Le payload est le contenu décodé
     du JWT qu'on a signé dans AuthService.login()

     Ce que cette fonction retourne est injecté
     dans req.user dans tous les controllers
  ══════════════════════════════════════════ */
  async validate(payload: { sub: number; email: string; role: string }) {
    const user = await this.usersService.findOne(payload.sub);

    if (!user) {
      throw new UnauthorizedException('Token invalide — utilisateur introuvable');
    }

    return user; // → disponible via @Request() req → req.user
  }
}