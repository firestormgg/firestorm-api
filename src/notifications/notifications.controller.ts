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
import { NotificationsService } from './notifications.service';
import { NotificationResponseDto } from './validators/notification-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Notifications')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  /* ── GET /api/notifications ── */
  @Get()
  @ApiOperation({ summary: 'Mes notifications', description: 'Toutes les notifications du user connecté' })
  @ApiResponse({ status: 200, description: 'Notifications récupérées', type: [NotificationResponseDto] })
  async findAll(@Request() req) {
    return this.notificationsService.findAllForUser(req.user.id);
  }

  /* ── GET /api/notifications/unread-count ── */
  @Get('unread-count')
  @ApiOperation({ summary: 'Nombre de non lues', description: 'Pour le badge dans la navbar' })
  @ApiResponse({ status: 200, description: 'Compte retourné', schema: { example: { count: 3 } } })
  async countUnread(@Request() req) {
    return this.notificationsService.countUnread(req.user.id);
  }

  /* ── PATCH /api/notifications/:id/read ── */
  @Patch(':id/read')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Marquer comme lue' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Notification lue', type: NotificationResponseDto })
  @ApiResponse({ status: 404, description: 'Notification introuvable' })
  async markAsRead(
    @Param('id', ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.notificationsService.markAsRead(id, req.user.id);
  }

  /* ── PATCH /api/notifications/read-all ── */
  @Patch('read-all')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Tout marquer comme lu' })
  @ApiResponse({ status: 200, description: 'Toutes lues' })
  async markAllAsRead(@Request() req) {
    return this.notificationsService.markAllAsRead(req.user.id);
  }
}