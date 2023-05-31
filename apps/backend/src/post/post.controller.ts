import { Body, Controller, Request, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './post.dto';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UsersService,
  ) {}

  @Post('create')
  async createPost(@Request() req, @Body() post: CreatePostDto) {
    const user = await this.userService.findOne(req.user.email);
    const newPost = await this.postService.create(post, user.email);
    return newPost;
  }
}
