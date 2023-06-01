import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  // Set up the Nest application
  const app: INestApplication = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Get config service
  const configService: ConfigService = app.get(ConfigService);

  // Set global prefix
  app.setGlobalPrefix(configService.get<string>('APP_GLOBAL_PREFIX'));

  // Set global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Get port from config service
  const port: number = configService.get<number>('APP_PORT');

  // Start the app
  await app.listen(port);
}
bootstrap();
