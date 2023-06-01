import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthLogin } from 'src/app/interfaces/auth.interface';

const loginData: AuthLogin = {
  email: 'dev.alexander.daza@gmail.com',
  password: 'password',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm.reset(loginData);
  }

  isValidField(field: string): boolean {
    const fieldControl = this.loginForm.get(field);
    return fieldControl?.invalid && fieldControl?.touched ? true : false;
  }

  getFieldsError(field: string): string {
    const fieldControl = this.loginForm.get(field);
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

  onLogin(): void {
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
