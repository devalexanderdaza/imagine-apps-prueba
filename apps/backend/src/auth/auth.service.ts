import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/users.interface';

import { LoginCredentialsDto } from './auth.dto';
import { ILoginResponse } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * Sign in a user
   * @param data | LoginCredentialsDto
   */
  async signIn(data: LoginCredentialsDto): Promise<ILoginResponse> {
    const user: IUser = await this.usersService.findOne(data.email);
    if (user?.password !== data.password) {
      throw new UnauthorizedException();
    }
    delete user.password;
    const payload = { sub: user._id, email: user.email };
    const access_token = this.jwtService.sign(payload);
    return { user, access_token };
  }
}
