import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginAuthService } from './login-auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.loginAuthService.isAuthenticated().pipe(
      map((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/login']); // Redireciona para login se não estiver autenticado
          return false;
        }
        return true;
      })
    );
  }
}
