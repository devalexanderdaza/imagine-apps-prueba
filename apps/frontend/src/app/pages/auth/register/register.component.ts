import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = this.formBuilder.group({
    fullName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.registerForm.reset();
  }

  isValidField(field: string): boolean {
    const fieldControl = this.registerForm.get(field);
    return fieldControl?.invalid && fieldControl?.touched ? true : false;
  }

  getFieldsError(field: string): string {
    const fieldControl = this.registerForm.get(field);
    let message = '';
    if (fieldControl?.errors) {
      const { required, email, minLength, maxLength } = fieldControl.errors;
      if (required) message = 'This field is required';
      else if (email) message = 'The email is invalid';
      else if (minLength)
        message = 'The password must be at least 8 characters';
      else if (maxLength)
        message = 'The password must be a maximum of 16 characters';
    }
    return message;
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { fullName, email, password } = this.registerForm.value;
    this.apiService.register({ fullName, email, password }).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/auth/login');
        this.registerForm.reset();
      },
      (err) => console.log(err)
    );
  }
}
