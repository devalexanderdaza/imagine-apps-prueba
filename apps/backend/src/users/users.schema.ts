import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { IUser } from './users.interface';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  _id?: string;

  @Prop({
    required: true,
    minlength: 6,
  })
  fullName: string;

  @Prop({
    required: true,
    unique: true,
    minlength: 8,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 8,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
