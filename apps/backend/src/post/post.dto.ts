import { IPost } from './post.interface';

export class CreatePostDto implements IPost {
  title: string;
  content: string;
}
