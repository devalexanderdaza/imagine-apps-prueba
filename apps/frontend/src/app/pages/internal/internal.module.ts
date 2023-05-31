import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { MyPostComponent } from './my-post/my-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    NewPostComponent,
    MyPostComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule
  ]
})
export class InternalModule { }
