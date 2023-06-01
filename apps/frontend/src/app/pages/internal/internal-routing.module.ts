import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPostComponent } from './my-post/my-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'my',
    component: MyPostComponent,
  },
  {
    path: 'new',
    component: NewPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
