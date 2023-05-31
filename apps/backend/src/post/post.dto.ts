import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { IPost } from './post.interface';

export class CreatePostDto implements IPost {
  @IsNotEmpty()
  @MaxLength(120)
  @MinLength(1)
  title: string;

  @IsNotEmpty()
  @MinLength(1)
  content: string;
}
