import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionComponent } from './session/session.component';
import { ExchangeTypeComponent } from './exchange-type/exchange-type.component';
import { ExchangeHistoryComponent } from './exchange-history/exchange-history.component';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { CustomJwtInterceptor } from './http-interceptors/custom-jwt-interceptor';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SessionComponent,
    ExchangeTypeComponent,
    ExchangeHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //JwtModule.forRoot({
    //  config: {
    //    tokenGetter: tokenGetter,
    //    allowedDomains: ["localhost:8010"],
    //    disallowedRoutes: [],
    //  },
    //}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomJwtInterceptor, multi: true},
    {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
