import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthLogin } from '../interfaces/auth.interface';

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
}
