import { Body, Controller, Get, Post, Request } from '@nestjs/common';

import { IsPublic } from 'src/decorators/isPublic.decorator';

import { LoginCredentialsDto } from './auth.dto';
import { ILoginResponse } from './auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Post('login')
  async login(@Body() data: LoginCredentialsDto): Promise<ILoginResponse> {
    return await this.authService.signIn(data);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
