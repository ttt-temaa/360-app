import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequestDTO, RegisterRequestDTO } from '../models/deadline';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080';
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    // Восстанавливаем токен из localStorage при инициализации
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      this.tokenSubject.next(savedToken);
    }
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(credentials: LoginRequestDTO): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/login`, credentials)
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.tokenSubject.next(response.token);
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  register(userData: RegisterRequestDTO): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/register`, userData);
  }

  logout(): void {
    this.tokenSubject.next(null);
    localStorage.removeItem('token');
  }
} 