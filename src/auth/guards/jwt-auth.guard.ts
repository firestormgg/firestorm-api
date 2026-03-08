import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/* ══════════════════════════════════════════
   JWT AUTH GUARD
   Protège les routes qui nécessitent un JWT
   Usage : @UseGuards(JwtAuthGuard)
   → Si token absent ou invalide → 401
   → Si token valide → req.user = user
══════════════════════════════════════════ */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}