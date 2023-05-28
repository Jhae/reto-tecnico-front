import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionComponent } from './session/session.component';
import { ExchangeTypeComponent } from './exchange-type/exchange-type.component';
import { ExchangeHistoryComponent } from './exchange-history/exchange-history.component';

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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
