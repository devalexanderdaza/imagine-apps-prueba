import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

import { IS_PUBLIC_KEY } from 'src/decorators/isPublic.decorator';

import { jwtConstants } from './auth.constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Validate if the route is public or not
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  /**
   * Extracts the token from the request header
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    if (!request.headers['authorization']) {
      return undefined;
    }
    const token = request.headers['authorization'].split(' ');
    if (token.length !== 2 && token[0] !== 'Bearer') {
      return undefined;
    }
    return token[1];
  }
}
