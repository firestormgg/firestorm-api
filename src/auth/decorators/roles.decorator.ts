import { SetMetadata } from '@nestjs/common';
import { Role } from 'generated/prisma/enums';

export const ROLES_KEY = 'roles';

/* ══════════════════════════════════════════
   ROLES DECORATOR
   Utilisé sur les routes pour définir
   quel(s) rôle(s) sont autorisés

   Usage :
   @Roles(Role.ADMIN)
   @UseGuards(JwtAuthGuard, RolesGuard)
   @Get()
   findAll() {}
══════════════════════════════════════════ */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);