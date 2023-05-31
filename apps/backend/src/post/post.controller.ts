import { Body, Controller, Request, Post, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './post.dto';
import { User } from 'src/users/users.schema';

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

  @Get('get')
  async getPostByUser(@Request() req) {
    const user: User = await this.userService.findOne(req.user.email);
    const posts = await this.postService.findByUser(user._id);
    return posts;
  }

  @Get('all')
  async getAllPosts() {
    const posts = await this.postService.findAll();
    return posts;
  }

  @Get('search/:q')
  async searchPost(@Param('q') searchCharacter: string) {
    const posts = await this.postService.findPostsByCharacter(searchCharacter);
    return posts;
  }

  @Get('user/:email')
  async getPostByUserEmail(@Param('email') email: string) {
    const posts = await this.postService.findByUserEmail(email);
    return posts;
  }

  @Get('date/:date')
  async getPostByDate(@Param('date') date: string) {
    date = date.split('-').reverse().join('-');

    const posts = await this.postService.findByDate(date);
    return posts;
  }
}
