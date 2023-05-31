import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { LoginCredentialsDto } from './auth.dto';
import { ILoginResponse } from './auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() data: LoginCredentialsDto): Promise<ILoginResponse> {
    return await this.authService.signIn(data);
  }
}
