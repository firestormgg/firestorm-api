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
  ══════════════════════════════════════════ */
  @Get('active')
  @ApiOperation({ summary: 'Tournoi actif', description: 'Retourne le tournoi actif ou terminé le plus récent' })
  @ApiResponse({ status: 200, description: 'Tournoi récupéré', type: TournamentResponseDto })
  @ApiResponse({ status: 404, description: 'Aucun tournoi' })
  async getActive() {
    return this.tournamentsService.getActive();
  }

  /* ══════════════════════════════════════════
     GET /api/tournaments/:id/ranking
     Public — classement d'un tournoi
  ══════════════════════════════════════════ */
  @Get(':id/ranking')
  @ApiOperation({ summary: 'Classement public d\'un tournoi' })
  @ApiParam({ name: 'id', description: 'ID du tournoi', example: 1 })
  @ApiResponse({ status: 200, description: 'Classement récupéré' })
  @ApiResponse({ status: 404, description: 'Tournoi introuvable' })
  async getRanking(@Param('id', ParseIntPipe) id: number) {
    return this.tournamentsService.getRanking(id);
  }

  /* ══════════════════════════════════════════
     PATCH /api/tournaments/:id/register
  ══════════════════════════════════════════ */
  @Patch(':id/register')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: "S'inscrire au tournoi" })
  @ApiParam({ name: 'id', description: 'ID du tournoi', example: 1 })
  @ApiResponse({ status: 200, description: 'Inscription confirmée' })
  @ApiResponse({ status: 400, description: 'Inscriptions fermées / complet / deadline passée' })
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