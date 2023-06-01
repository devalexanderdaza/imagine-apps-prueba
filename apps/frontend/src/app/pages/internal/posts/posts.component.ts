import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/post.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.apiService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
        console.log(this.posts);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
