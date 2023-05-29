import { AuthResponse } from './../model/response/auth-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../model/request/auth-request';
import { AppUser } from '../model/app-user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LOG_IN_URL = 'http://localhost:8010/svc/auth'

  appUser: AppUser = new AppUser

  constructor(
    private jwtHelperService : JwtHelperService,
    private httpClient: HttpClient
    ) { }

  getLocalToken() :string {
    return localStorage.getItem("access_token")?? ''
  }

  logIn(username :string, password :string): void
  {
    let authRequest = new AuthRequest()
    authRequest.username = username
    authRequest.password = password

    this.httpClient.post<AuthResponse>(this.LOG_IN_URL, authRequest)
      .subscribe(
        (response: AuthResponse) => {
          localStorage.removeItem('access_token')
          localStorage.setItem('access_token', response.access_token)
          if ( !this.isTokenValid() )
          {
              console.log(!this.isTokenValid());

            return
          }
          let decodedToken = this.jwtHelperService.decodeToken(this.getLocalToken())
          this.appUser = new AppUser
          this.appUser.username = decodedToken.sub
          this.appUser.roles = decodedToken.roles
          this.appUser.isSessionActive = true
          this.onSuccessAuth()

        })
  }

  onSuccessAuth():void {
    console.log(this.appUser);
  }

  logOut() :void {
    localStorage.removeItem('access_token')
    this.appUser = new AppUser
  }

  isTokenValid() :boolean {
    return this.getLocalToken() !== '' &&
          !this.jwtHelperService.isTokenExpired( this.getLocalToken())
  }



}
