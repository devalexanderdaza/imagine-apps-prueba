import { IUser } from 'src/users/users.interface';

// Auth interface for login credentials.
export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  access_token: string;
}

export interface IBlacklistedToken {
  token: string;
}
