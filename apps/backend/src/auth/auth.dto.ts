import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import { ILoginCredentials } from './auth.interface';

/**
 * Login credentials data transfer object
 * @see ILoginCredentials
 */
export class LoginCredentialsDto implements ILoginCredentials {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
