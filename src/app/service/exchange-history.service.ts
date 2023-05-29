import { Injectable } from '@angular/core';
import { ExchangeHistoryResponse } from '../model/exchange-history-response';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeHistoryService {
  SRC_EXCHANGE_HISTORY_URL = 'http://localhost:8010/svc/exchangeHistory'
  MAKE_CURRENCY_ECAHNGE_URL = 'http://localhost:8010/svc/doExchange'

  constructor(private httpClient: HttpClient) { }

  getExchangeHistory() :Observable<ExchangeHistoryResponse[]> {
      return this.httpClient.get<ExchangeHistoryResponse[]>(this.SRC_EXCHANGE_HISTORY_URL);
  }

  makeCurrencyExchange(requestBody: object) :Observable<HttpResponse<any>> {
    return this.httpClient.post(this.MAKE_CURRENCY_ECAHNGE_URL, requestBody, {observe:'response'})
  }
}
