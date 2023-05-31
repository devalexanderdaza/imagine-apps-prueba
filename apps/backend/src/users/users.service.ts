import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import type { User } from './users.interface';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      _id: uuidv4(),
      fullName: 'John Doe',
      email: 'john@doe.com',
      password: 'password',
    },
    {
      _id: uuidv4(),
      fullName: 'Jane Doe',
      email: 'jane@doe.com',
      password: 'password',
    },
  ];

  /**
   * Find a user by email
   * @param email | string
   * @returns Promise<User | undefined>
   */
  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  /**
   * Find a user by id
   * @param id | string
   * @returns Promise<User | undefined>
   */
  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user._id === id);
  }

  /**
   * Create a new user
   * @param user | CreateUserDto
   * @returns Promise<User>
   * @see CreateUserDto
   * @see User
   */
  async create(user: CreateUserDto): Promise<User> {
    const newUser = {
      _id: uuidv4(),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
}
