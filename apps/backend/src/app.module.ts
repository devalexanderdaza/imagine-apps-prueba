import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';

import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // make env variables global
      envFilePath: join(__dirname, '..', '..', '..', '.env'), // path to .env file
      validationSchema: Joi.object({
        // Application
        APP_PORT: Joi.number().default(3000),
        APP_GLOBAL_PREFIX: Joi.string().default('api'),
        // Database
        DB_HOST: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_URL: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
