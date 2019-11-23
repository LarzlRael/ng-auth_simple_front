import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private autService: AuthService) { }
  intercept(req, next) {
    const tokenizeRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.autService.getToken()}`
      }
    })
    return next.handle(tokenizeRequest);
  }

}
