export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthRegister {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
