import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'generated/prisma/enums';
import { ROLES_KEY } from '../decorators/roles.decorator';

/* ══════════════════════════════════════════
   ROLES GUARD
   Vérifie que le user connecté a le bon rôle
   Toujours utilisé APRÈS JwtAuthGuard

   Usage :
   @UseGuards(JwtAuthGuard, RolesGuard)
   @Roles(Role.ADMIN)
══════════════════════════════════════════ */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Pas de rôle requis → accès libre
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const { user } = context.switchToHttp().getRequest();

    if (!requiredRoles.includes(user?.role)) {
      throw new ForbiddenException('Accès refusé — permissions insuffisantes');
    }

    return true;
  }
}