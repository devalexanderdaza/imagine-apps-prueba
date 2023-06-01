import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  public postForm: FormGroup = this.formBuilder.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    content: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(500)],
    ],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.postForm.reset();
  }

  isValidField(field: string): boolean {
    const fieldControl = this.postForm.get(field);
    return fieldControl?.invalid && fieldControl?.touched ? true : false;
  }

  getFieldsError(field: string): string {
    const fieldControl = this.postForm.get(field);
    let message = '';
    if (fieldControl?.errors) {
      const { required, minLength, maxLength } = fieldControl.errors;
      if (required) message = 'This field is required';
      else if (minLength) message = 'The title must be at least 5 characters';
      else if (maxLength)
        message = 'The title must be a maximum of 50 characters';
    }
    return message;
  }

  createPost() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    this.apiService.createPost(this.postForm.value).subscribe(
      (response) => {
        this.router.navigate(['/internal/my']);
        this.postForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
