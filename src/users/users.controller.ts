import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './validator/update-user.dto';
import { UserResponseDto } from './validator/user-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard) // ← toutes les routes de ce controller nécessitent un JWT
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /* ── GET /api/users/me/registrations ── */
  @Get('me/registrations')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Mes tournois', description: 'Retourne les inscriptions du user connecté avec les infos des tournois' })
  @ApiResponse({ status: 200, description: 'Inscriptions récupérées' })
  async getMyRegistrations(@Request() req) {
    const user = await this.usersService.findWithRegistrations(req.user.id);
    return user.registrations;
  }

  /* ── POST /api/users/me/avatar ── */
  @Post('me/avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload avatar', description: 'Upload vers Supabase Storage' })
  @ApiResponse({ status: 200, description: 'Avatar mis à jour', schema: { example: { avatar: 'https://...' } } })
  async uploadAvatar(
    @Request() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.uploadAvatar(req.user.id, file);
  }


  /* ══════════════════════════════════════════
     GET /api/users/me
     Retourne le profil du user connecté
  ══════════════════════════════════════════ */
  @Get('me')
  @ApiOperation({
    summary: 'Mon profil',
    description: 'Retourne les infos du user actuellement connecté',
  })
  @ApiResponse({ status: 200, description: 'Profil récupéré', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  async getMe(@Request() req) {
    return this.usersService.findOne(req.user.id);
  }

  /* ══════════════════════════════════════════
     GET /api/users/me/tournaments
     Retourne les inscriptions du user connecté
  ══════════════════════════════════════════ */
  @Get('me/tournaments')
  @ApiOperation({
    summary: 'Mes tournois',
    description: 'Retourne tous les tournois auxquels le user est inscrit',
  })
  @ApiResponse({ status: 200, description: 'Inscriptions récupérées' })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  async getMyTournaments(@Request() req) {
    return this.usersService.findWithRegistrations(req.user.id);
  }

  /* ══════════════════════════════════════════
     PATCH /api/users/me
     Modifier son propre profil
  ══════════════════════════════════════════ */
  @Patch('me')
  @ApiOperation({
    summary: 'Modifier mon profil',
    description: 'Met à jour les infos du user connecté (pseudo, avatar, ffid...)',
  })
  @ApiResponse({ status: 200, description: 'Profil mis à jour', type: UserResponseDto })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 409, description: 'Pseudo déjà pris' })
  async updateMe(@Request() req, @Body() dto: UpdateUserDto) {
    return this.usersService.update(req.user.id, dto);
  }

  /* ══════════════════════════════════════════
     DELETE /api/users/me
     Supprimer son propre compte
  ══════════════════════════════════════════ */
  @Delete('me')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Supprimer mon compte',
    description: 'Supprime définitivement le compte du user connecté',
  })
  @ApiResponse({ status: 200, description: 'Compte supprimé' })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  async deleteMe(@Request() req) {
    return this.usersService.remove(req.user.id);
  }

  /* ══════════════════════════════════════════
     ── ROUTES ADMIN ──
     Nécessitent le rôle ADMIN
  ══════════════════════════════════════════ */

  /* ── GET /api/users ── */
  @Get()
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: '[ADMIN] Tous les utilisateurs',
    description: 'Retourne la liste complète des utilisateurs — Admin seulement',
  })
  @ApiResponse({ status: 200, description: 'Liste récupérée', type: [UserResponseDto] })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 403, description: 'Accès refusé — Admin requis' })
  async findAll() {
    return this.usersService.findAll();
  }

  /* ── GET /api/users/:id ── */
  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: '[ADMIN] Un utilisateur par ID',
    description: 'Retourne les infos d\'un utilisateur — Admin seulement',
  })
  @ApiParam({ name: 'id', description: 'ID de l\'utilisateur', example: 1 })
  @ApiResponse({ status: 200, description: 'Utilisateur trouvé', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 403, description: 'Accès refusé — Admin requis' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  /* ── PATCH /api/users/:id ── */
  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: '[ADMIN] Modifier un utilisateur',
    description: 'Met à jour les infos d\'un utilisateur — Admin seulement',
  })
  @ApiParam({ name: 'id', description: 'ID de l\'utilisateur', example: 1 })
  @ApiResponse({ status: 200, description: 'Utilisateur mis à jour', type: UserResponseDto })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 403, description: 'Accès refusé — Admin requis' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.update(id, dto);
  }

  /* ── DELETE /api/users/:id ── */
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: '[ADMIN] Supprimer un utilisateur',
    description: 'Supprime définitivement un utilisateur — Admin seulement',
  })
  @ApiParam({ name: 'id', description: 'ID de l\'utilisateur', example: 1 })
  @ApiResponse({ status: 200, description: 'Utilisateur supprimé' })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 403, description: 'Accès refusé — Admin requis' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  /* ── PATCH /api/users/:id/stats ── */
  @Patch(':id/stats')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: '[ADMIN] Mettre à jour les stats',
    description: 'Met à jour rank, points et wins d\'un joueur — Admin seulement',
  })
  @ApiParam({ name: 'id', description: 'ID de l\'utilisateur', example: 1 })
  @ApiResponse({ status: 200, description: 'Stats mises à jour', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 403, description: 'Accès refusé — Admin requis' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async updateStats(
    @Param('id', ParseIntPipe) id: number,
    @Body() stats: { rank?: number; points?: number; wins?: number },
  ) {
    return this.usersService.updateStats(id, stats);
  }
}