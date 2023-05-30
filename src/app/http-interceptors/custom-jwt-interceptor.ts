import { AuthService } from '../service/auth.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomJwtInterceptor implements HttpInterceptor{

  constructor(
      private authService :AuthService
  ){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const AUTHORIZATION_CHAIN = 'Authorization'
    const BEARER_CHAIN = 'Bearer '

    if ( request.headers.get('Authorization') ){
      return next.handle(request);
    }

    if ( !this.authService.isTokenValid() ){
      return next.handle(request);
    }

    request = request.clone({
      headers: request.headers.set(AUTHORIZATION_CHAIN, BEARER_CHAIN + this.authService.getLocalToken())
    })

    return next.handle(request);

  }
}
