import { Injectable } from '@angular/core';
import { ExchangeHistoryResponse } from '../model/exchange-history-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeHistoryService {
  TARGET_URL = 'http://localhost:8010/svc/exchangeHistory'

  constructor(private httpClient: HttpClient) { }

  getExchangeHistory() :Observable<ExchangeHistoryResponse[]> {
      return this.httpClient.get<ExchangeHistoryResponse[]>(this.TARGET_URL);
    }
}
