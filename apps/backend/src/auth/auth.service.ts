import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/users.interface';

import { LoginCredentialsDto } from './auth.dto';
import { ILoginResponse } from './auth.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlacklistedToken } from './auth.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(BlacklistedToken.name)
    private blacklistedTokenModel: Model<BlacklistedToken>,
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
    const payload = { sub: user.fullName, email: user.email };
    const access_token = this.jwtService.sign(payload);
    return { user, access_token };
  }

  /**
   * Validate a token
   * @param token | string
   * @returns Promise<boolean>
   */
  async validateBlacklistedToken(token: string): Promise<boolean> {
    const blacklistedToken = await this.blacklistedTokenModel.findOne({
      token,
    });
    if (blacklistedToken) {
      return true;
    }
    return false;
  }

  /**
   * Logout a user
   * @param token | string
   * @returns Promise<{ message: string }>
   * @throws UnauthorizedException
   */
  async logout(token: string): Promise<{ message: string }> {
    const blacklistedToken = new this.blacklistedTokenModel({ token });
    await blacklistedToken.save();
    return { message: 'Logout successful' };
  }
}
