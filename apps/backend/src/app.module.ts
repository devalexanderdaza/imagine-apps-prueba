import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { join } from 'path';

import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // make env variables global
      expandVariables: true, // expand variables
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
    MongooseModule.forRoot(process.env.DB_URL),
    AuthModule,
    UsersModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
