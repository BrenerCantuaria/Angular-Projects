import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  private apiUrl = `${environment.apiUrl}/tokens/`;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  private platformId = inject(PLATFORM_ID); // navegador ou no servidor

  constructor(private http: HttpClient) {}

  // Verifica se há um token salvo no navegador
  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token'); // Acessa localStorage no navegador
    }
    return false;
  }

  // Método de login para enviar email e senha ao backend
  login(email: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(this.apiUrl, { email, password })
      .pipe(
        tap((response) => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', response.token);
          }
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  // Retorna se o usuário está autenticado
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Método de logout
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.isAuthenticatedSubject.next(false);
  }

  // Retorna o token armazenado (se houver)
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }
}
