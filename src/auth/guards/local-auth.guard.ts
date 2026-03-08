import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/* ══════════════════════════════════════════
   LOCAL AUTH GUARD
   Utilisé uniquement sur POST /auth/login
   → Déclenche LocalStrategy.validate()
   → Vérifie email + password automatiquement
══════════════════════════════════════════ */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}