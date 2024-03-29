import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthLogin } from '../interfaces/auth.interface';
import { PostCreate } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL: string = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) {}

  public login(data: AuthLogin): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/auth/login`, data);
  }

  public register(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/auth/register`, data);
  }

  public getMyPosts(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(`${this.API_URL}/post/get`, {
      headers,
    });
  }

  public getAllPosts(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(`${this.API_URL}/post/all`, {
      headers,
    });
  }

  public createPost(data: PostCreate): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.post<any>(`${this.API_URL}/post/create`, data, {
      headers,
    });
  }

  private getHeaders() {
    const token = localStorage.getItem('token')!;
    const headers = { Authorization: `${token}` };
    return headers;
  }
}
