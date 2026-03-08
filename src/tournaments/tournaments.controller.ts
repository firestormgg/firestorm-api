import {
  Controller,
  Get,
  Patch,
  Param,
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
import { TournamentsService } from './tournaments.service';
import { TournamentResponseDto } from './validators/tournament-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Tournaments')
@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  /* ══════════════════════════════════════════
     GET /api/tournaments/active
     Public — pas besoin d'être connecté
  ══════════════════════════════════════════ */
  @Get('active')
  @ApiOperation({
    summary: 'Tournoi actif',
    description: 'Retourne le tournoi actuellement ouvert ou à venir',
  })
  @ApiResponse({ status: 200, description: 'Tournoi récupéré', type: TournamentResponseDto })
  @ApiResponse({ status: 404, description: 'Aucun tournoi actif' })
  async getActive() {
    return this.tournamentsService.getActive();
  }

  /* ══════════════════════════════════════════
     PATCH /api/tournaments/:id/register
     Connecté requis — inscrit le user
  ══════════════════════════════════════════ */
  @Patch(':id/register')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'S\'inscrire au tournoi',
    description: 'Inscrit le user connecté et incrémente current_players',
  })
  @ApiParam({ name: 'id', description: 'ID du tournoi', example: 1 })
  @ApiResponse({ status: 200, description: 'Inscription confirmée' })
  @ApiResponse({ status: 400, description: 'Inscriptions fermées / tournoi complet / deadline passée' })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  @ApiResponse({ status: 404, description: 'Tournoi introuvable' })
  @ApiResponse({ status: 409, description: 'Déjà inscrit' })
  async register(
    @Param('id', ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.tournamentsService.register(id, req.user.id);
  }
}