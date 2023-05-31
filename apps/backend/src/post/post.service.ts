import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './post.dto';
import { User } from 'src/users/users.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    private userService: UsersService,
  ) {}

  /**
   * Find posts by character on the title or content
   * @param character | string
   * @returns Promise<Post[]>
   */
  async findPostsByCharacter(character: string): Promise<Post[]> {
    return this.postModel
      .find({
        $or: [
          { title: { $regex: character, $options: 'i' } },
          { content: { $regex: character, $options: 'i' } },
        ],
      })
      .exec();
  }

  /**
   * Find a post by user id
   * @param userId | string
   * @returns Promise<Post[]>
   */
  async findByUser(userId: string): Promise<Post[]> {
    return this.postModel.find({ user: userId }).exec();
  }

  /**
   * Find a post by user email
   * @param email | string
   * @returns Promise<Post[]>
   */
  async findByUserEmail(email: string): Promise<Post[]> {
    const user: User = await this.userService.findOne(email);
    return this.postModel.find({ user: user._id }).exec();
  }

  /**
   * Find all posts
   * @returns Promise<Post[]>
   */
  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  /**
   * Create a new post
   * @param post | CreatePostDto
   * @returns Promise<Post>
   */
  async create(post: CreatePostDto, user: string): Promise<Post> {
    const author: User = await this.userService.findOne(user);
    const newPost = new this.postModel({
      ...post,
      user: author._id,
    });
    return newPost.save();
  }
}
