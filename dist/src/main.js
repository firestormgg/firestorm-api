"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
require("dotenv/config");
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.enableCors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    });
    app.use((0, cookie_parser_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.setGlobalPrefix('api');
    if (process.env.NODE_ENV !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('FIRE STORM API')
            .setDescription('API officielle de la plateforme FIRE STORM — Tournois Free Fire')
            .setVersion('1.0')
            .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            description: 'Entre ton JWT token ici',
        }, 'access-token')
            .addTag('Auth', 'Login, Register, Logout')
            .addTag('Tournaments', 'Gestion des tournois')
            .addTag('Registrations', 'Inscriptions aux tournois')
            .addTag('Notifications', 'Notifications utilisateur')
            .addTag('Users', 'Profil utilisateur')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('docs', app, document, {
            swaggerOptions: {
                persistAuthorization: true,
            },
        });
    }
    const port = process.env.PORT ?? 3000;
    await app.listen(port, '0.0.0.0');
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
//# sourceMappingURL=main.js.map