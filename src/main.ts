import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* ══════════════════════════════════════════
     SÉCURITÉ — Helmet
     Protège les headers HTTP
  ══════════════════════════════════════════ */
  app.use(helmet());

  /* ══════════════════════════════════════════
     CORS
     Autorise les requêtes venant du front Next.js
  ══════════════════════════════════════════ */
  app.enableCors({ 
    origin: [
      '*', 
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,                // autorise les cookies
  });

  /* ══════════════════════════════════════════
     COOKIE PARSER
     Pour lire les cookies dans les controllers
  ══════════════════════════════════════════ */
  app.use(cookieParser());

  /* ══════════════════════════════════════════
     VALIDATION GLOBALE
     class-validator sur tous les DTOs
  ══════════════════════════════════════════ */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // supprime les champs non déclarés dans le DTO
      forbidNonWhitelisted: true,   // renvoie une erreur si champ inconnu envoyé
      transform: true,              // transforme automatiquement les types (string → number etc.)
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  /* ══════════════════════════════════════════
     PREFIX GLOBAL
     Toutes les routes préfixées par /api
     ex: /api/auth/login, /api/tournaments
  ══════════════════════════════════════════ */
  app.setGlobalPrefix('api');

  /* ══════════════════════════════════════════
     SWAGGER — Documentation auto
     Accessible sur http://localhost:3000/docs
  ══════════════════════════════════════════ */
  const config = new DocumentBuilder()
    .setTitle('FIRE STORM API')
    .setDescription('API officielle de la plateforme FIRE STORM — Tournois Free Fire')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Entre ton JWT token ici',
      },
      'access-token',               // nom du schéma — utilisé dans les decorators
    )
    .addTag('Auth',          'Login, Register, Logout')
    .addTag('Tournaments',   'Gestion des tournois')
    .addTag('Registrations', 'Inscriptions aux tournois')
    .addTag('Notifications', 'Notifications utilisateur')
    .addTag('Users',         'Profil utilisateur')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,   // garde le token entre les refreshs de page
    },
  });

  /* ══════════════════════════════════════════
     DÉMARRAGE
  ══════════════════════════════════════════ */
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`
🔥 ════════════════════════════════════════
   FIRE STORM API démarrée
   
   🚀 API      → http://localhost:${port}/api
   📚 Swagger  → http://localhost:${port}/docs
   🌍 Env      → ${process.env.NODE_ENV ?? 'development'}
🔥 ════════════════════════════════════════
  `);
}

bootstrap();