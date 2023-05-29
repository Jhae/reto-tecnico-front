import { AuthService } from './../service/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

  constructor(
      private authService :AuthService
  ){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INGREASNDO");
    if ( req.headers.get('Authorization')) {

      console.log("si HA  cabecera de auth");
      return next.handle(req);
    }
    console.log("NO HA  cabecera de auth");

    if( this.authService.isTokenValid() )
    {
      console.log("TOKEN VALIDO");
      console.log(this.authService.getLocalToken());


      console.log("sSett new token");
      console.log(req);

      req = req.clone({
        headers: req.headers.set('Authorization','Bearer '+ this.authService.getLocalToken())
      })
    }

    console.log("TOKEN INVLADO");


    return next.handle(req);

  }
}
