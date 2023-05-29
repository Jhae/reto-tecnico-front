import { GetCurrencyResponse } from './../model/response/get-currency-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  RSC_EXCHANGE_TYPE_URL = 'http://localhost:8010/svc/currency'

  constructor(
    private httpClient :HttpClient
  ) { }

  getCurrencies() :Observable<GetCurrencyResponse[]>{
    return this.httpClient.get<GetCurrencyResponse[]>(this.RSC_EXCHANGE_TYPE_URL);
  }
}
