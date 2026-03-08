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
import { MatchService } from './match.service';
import { CheckInResponseDto } from './validators/checkin-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Matches')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('matches')
export class MatchController {
  constructor(private readonly matchesService: MatchService) {}

  /* ══════════════════════════════════════════
     GET /api/matches/next
     Prochain match du tournoi actif
  ══════════════════════════════════════════ */
  @Get('next')
  @ApiOperation({ summary: 'Prochain match', description: 'Retourne le prochain match PENDING ou LIVE' })
  @ApiResponse({ status: 200, description: 'Match trouvé' })
  @ApiResponse({ status: 404, description: 'Aucun match à venir' })
  async getNext() {
    return this.matchesService.getNext();
  }

  /* ══════════════════════════════════════════
     GET /api/matches/check-registration
     Vérifie si le user est inscrit au tournoi actif
  ══════════════════════════════════════════ */
  @Get('check-registration')
  @ApiOperation({ summary: 'Vérifier inscription', description: 'Retourne { registered: true/false }' })
  @ApiResponse({ status: 200, schema: { example: { registered: true } } })
  async checkRegistration(@Request() req) {
    return this.matchesService.checkRegistration(req.user.id);
  }

  /* ══════════════════════════════════════════
     PATCH /api/matches/:id/checkin
     Check in pour un match
  ══════════════════════════════════════════ */
  @Patch(':id/checkin')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:     'Check in',
    description: 'Disponible 1h avant. Retourne room_id + password + envoie une notification.',
  })
  @ApiParam({ name: 'id', description: 'ID du match', example: 1 })
  @ApiResponse({ status: 200, description: 'Check in confirmé', type: CheckInResponseDto })
  @ApiResponse({ status: 400, description: 'Fenêtre fermée / room non disponible' })
  @ApiResponse({ status: 403, description: 'Non inscrit au tournoi' })
  @ApiResponse({ status: 404, description: 'Match introuvable' })
  async checkIn(
    @Param('id', ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.matchesService.checkIn(id, req.user.id);
  }
}