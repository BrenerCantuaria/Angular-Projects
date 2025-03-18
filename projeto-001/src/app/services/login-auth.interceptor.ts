import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';
@Injectable()
export class LoginAuthInterceptor implements HttpInterceptor {
  constructor(private loginAuthService: LoginAuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.loginAuthService.getToken();

    if (token) {
      // Clona a requisição e adiciona o token no cabeçalho Authorization
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
