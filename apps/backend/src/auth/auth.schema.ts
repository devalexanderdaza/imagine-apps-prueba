import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { IBlacklistedToken } from './auth.interface';
import { HydratedDocument } from 'mongoose';

export type BlacklistedTokenDocument = HydratedDocument<BlacklistedToken>;

@Schema()
export class BlacklistedToken implements IBlacklistedToken {
  _id?: string;

  @Prop({
    required: true,
  })
  token: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt?: Date;
}

export const BlacklistedTokenSchema =
  SchemaFactory.createForClass(BlacklistedToken);
