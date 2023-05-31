import { User } from 'src/users/users.schema';

// Post interface defines the structure of a post.
export interface IPost {
  title: string;
  content: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
