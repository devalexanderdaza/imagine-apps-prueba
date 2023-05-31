import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import { IUser } from './users.interface';

/**
 * User data transfer object
 */
export class CreateUserDto implements IUser {
  @IsNotEmpty()
  @MinLength(6)
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
