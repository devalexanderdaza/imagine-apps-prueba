import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-int-post',
  templateUrl: './int-post.component.html',
  styleUrls: ['./int-post.component.css'],
})
export class IntPostComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() createdAt: string = '';
}
