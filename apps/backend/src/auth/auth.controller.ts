import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnprocessableEntityException,
} from '@nestjs/common';

import { IsPublic } from 'src/decorators/isPublic.decorator';

import { LoginCredentialsDto } from './auth.dto';
import { ILoginResponse } from './auth.interface';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.schema';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @IsPublic()
  @Post('login')
  async login(@Body() data: LoginCredentialsDto): Promise<ILoginResponse> {
    return await this.authService.signIn(data);
  }

  @IsPublic()
  @Post('register')
  async register(@Body() data: CreateUserDto): Promise<ILoginResponse> {
    const userExists: User = await this.userService.findOne(data.email);
    console.log(userExists);
    if (userExists) {
      throw new UnprocessableEntityException('User already exists');
    }
    const user: User = await this.userService.create(data);
    return await this.authService.signIn({
      email: user.email,
      password: data.password,
    });
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
