import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { HydratedDocument } from 'mongoose';
import { IPost } from './post.interface';
import { User } from 'src/users/users.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post implements IPost {
  @Prop({
    required: true,
    maxlength: 120,
  })
  title: string;

  @Prop({
    required: true,
    minlength: 1,
  })
  content: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
