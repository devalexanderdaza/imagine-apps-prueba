import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Find a user by email
   * @param email | string
   * @returns Promise<User | undefined>
   */
  async findOne(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email }).exec();
  }

  /**
   * Create a new user
   * @param user | CreateUserDto
   * @returns Promise<User>
   * @see CreateUserDto
   * @see User
   */
  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
