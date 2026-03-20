import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
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
import { AdminService } from './admin.service';
import { CreateTournamentDto } from './validators/create-tournament.dto';
import { CreateMatchDto } from './validators/create-match.dto';
import { UpdateMatchDto } from './validators/update-match.dto';
import { AddResultsDto } from './validators/add-results.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';

@ApiTags('Admin')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  /* ── GET /api/admin/stats ── */
  @Get('stats')
  @ApiOperation({ summary: 'Dashboard stats' })
  async getStats() {
    return this.adminService.getStats();
  }

  /* ══════════════════════════════════════════
     TOURNOIS
  ══════════════════════════════════════════ */

  @Get('tournaments')
  @ApiOperation({ summary: 'Tous les tournois' })
  async getAllTournaments() {
    return this.adminService.getAllTournaments();
  }

  @Post('tournaments')
  @ApiOperation({ summary: 'Créer un tournoi' })
  @ApiResponse({ status: 201, description: 'Tournoi créé' })
  async createTournament(@Body() dto: CreateTournamentDto) {
    return this.adminService.createTournament(dto);
  }

  @Patch('tournaments/:id/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Changer le status du tournoi' })
  @ApiParam({ name: 'id', example: 1 })
  async updateTournamentStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: string },
  ) {
    return this.adminService.updateTournamentStatus(id, body.status);
  }

  @Get('tournaments/:id/registrations')
  @ApiOperation({ summary: 'Joueurs inscrits à un tournoi' })
  @ApiParam({ name: 'id', example: 1 })
  async getRegistrations(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getTournamentRegistrations(id);
  }

  @Delete('tournaments/:id/registrations/:userId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Annuler l'inscription d'un joueur" })
  @ApiParam({ name: 'id',     example: 1 })
  @ApiParam({ name: 'userId', example: 2 })
  async cancelRegistration(
    @Param('id',     ParseIntPipe) id:     number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.adminService.cancelRegistration(id, userId);
  }

  @Patch('tournaments/:id/registrations/:userId/confirm')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Confirmer le paiement d\'un joueur' })
  @ApiParam({ name: 'id',     example: 1 })
  @ApiParam({ name: 'userId', example: 2 })
  async confirmPayment(
    @Param('id',     ParseIntPipe) id:     number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.adminService.confirmPayment(id, userId);
  }

  @Post('tournaments/:id/notify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Envoyer une notification à tous les inscrits' })
  @ApiParam({ name: 'id', example: 1 })
  async broadcastNotification(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { title: string; body: string },
  ) {
    return this.adminService.broadcastNotification(id, body.title, body.body);
  }

  @Post('tournaments/:id/ranking')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Calculer et sauvegarder le classement' })
  @ApiParam({ name: 'id', example: 1 })
  async computeRanking(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.computeRanking(id);
  }

  @Get('tournaments/:id/ranking')
  @ApiOperation({ summary: "Récupérer le classement d'un tournoi" })
  @ApiParam({ name: 'id', example: 1 })
  async getRanking(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getRanking(id);
  }

  /* ══════════════════════════════════════════
     MATCHS
  ══════════════════════════════════════════ */

  @Get('tournaments/:id/matches')
  @ApiOperation({ summary: "Matchs d'un tournoi" })
  @ApiParam({ name: 'id', example: 1 })
  async getTournamentMatches(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getTournamentMatches(id);
  }

  @Post('matches')
  @ApiOperation({ summary: 'Créer un match' })
  @ApiResponse({ status: 201, description: 'Match créé' })
  async createMatch(@Body() dto: CreateMatchDto) {
    return this.adminService.createMatch(dto);
  }

  @Patch('matches/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Modifier un match (status, room_id, room_password)' })
  @ApiParam({ name: 'id', example: 1 })
  async updateMatch(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMatchDto,
  ) {
    return this.adminService.updateMatch(id, dto);
  }

  /* ══════════════════════════════════════════
     RÉSULTATS
  ══════════════════════════════════════════ */

  @Get('matches/:id/results')
  @ApiOperation({ summary: "Résultats d'un match" })
  @ApiParam({ name: 'id', example: 1 })
  async getMatchResults(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getMatchResults(id);
  }

  @Post('matches/:id/results')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Saisir les résultats d'un match" })
  @ApiParam({ name: 'id', example: 1 })
  async addResults(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AddResultsDto,
  ) {
    return this.adminService.addResults(id, dto);
  }
}