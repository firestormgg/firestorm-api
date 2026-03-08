import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './validators/register.dto';
import { LoginDto } from './validators/login.dto';
import { AuthResponseDto } from './validators/auth-response.dto';
import { UserResponseDto } from 'src/users/validator/user-response.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /* ══════════════════════════════════════════
     POST /api/auth/register
     Créer un compte
  ══════════════════════════════════════════ */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Créer un compte',
    description: 'Inscription avec pseudo, email et mot de passe — retourne un JWT',
  })
  @ApiResponse({ status: 201, description: 'Compte créé', type: AuthResponseDto })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 409, description: 'Email ou pseudo déjà utilisé' })
  async register(@Body() dto: RegisterDto): Promise<AuthResponseDto> {
    return this.authService.register(dto);
  }

  /* ══════════════════════════════════════════
     POST /api/auth/login
     Se connecter
     LocalAuthGuard valide email+password avant
     d'appeler cette fonction
  ══════════════════════════════════════════ */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'Se connecter',
    description: 'Connexion avec email + mot de passe — retourne un JWT',
  })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Connecté', type: AuthResponseDto })
  @ApiResponse({ status: 401, description: 'Email ou mot de passe incorrect' })
  async login(@Request() req): Promise<AuthResponseDto> {
    // req.user est injecté par LocalAuthGuard après validation
    return this.authService.login(req.user);
  }

  /* ══════════════════════════════════════════
     GET /api/auth/me
     Profil du user connecté via son JWT
  ══════════════════════════════════════════ */
  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Mon profil',
    description: 'Retourne le profil du user connecté à partir de son JWT',
  })
  @ApiResponse({ status: 200, description: 'Profil récupéré', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Token absent ou invalide' })
  async me(@Request() req): Promise<UserResponseDto> {
    return this.authService.me(req.user.id);
  }
}