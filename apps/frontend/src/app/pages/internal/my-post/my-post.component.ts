import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

interface Post {
  title: string;
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css'],
})
export class MyPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMyPosts();
  }

  getMyPosts() {
    this.apiService.getMyPosts().subscribe(
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
