import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IntPostComponent } from '../components/int-post/int-post.component';

import { InternalRoutingModule } from './internal-routing.module';

import { MyPostComponent } from './my-post/my-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    NewPostComponent,
    MyPostComponent,
    IntPostComponent,
  ],
  imports: [CommonModule, InternalRoutingModule, ReactiveFormsModule],
})
export class InternalModule {}
