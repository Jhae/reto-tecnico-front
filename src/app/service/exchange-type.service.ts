import { HttpClient } from '@angular/common/http';
import { ExchangeTypeResponse } from './../model/exchange-type-response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeTypeService {

  private TARGET_URL :string = 'http://localhost:8010/svc/exchangeTypes'
  private exchangeTypesResponse :ExchangeTypeResponse[]

  constructor(private httpClient :HttpClient) { }

  getExchangeTypes() :Observable<ExchangeTypeResponse[]> {
    return this.httpClient.get<ExchangeTypeResponse[]>(this.TARGET_URL)
  }
}
