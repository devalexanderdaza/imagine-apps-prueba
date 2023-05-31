// Base user interface
export interface IUser {
  _id?: string;
  fullName: string;
  email: string;
  password?: string;
}

// User interface for creating a new user
export type User = IUser;
