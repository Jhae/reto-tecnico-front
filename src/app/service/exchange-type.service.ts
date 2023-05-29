import { UpdateExchangeTypeRequest } from './../model/request/update-exchange-type-request';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ExchangeTypeResponse } from './../model/exchange-type-response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeTypeService {

  private RSC_EXCHANGE_TYPE_URL = 'http://localhost:8010/svc/exchangeTypes'

  constructor(private httpClient :HttpClient) { }

  getExchangeTypes() :Observable<ExchangeTypeResponse[]> {
    return this.httpClient.get<ExchangeTypeResponse[]>(this.RSC_EXCHANGE_TYPE_URL)
  }

  postExchangeType(requestBody: object): Observable<HttpResponse<any>> {
    return this.httpClient.post<HttpResponse<any>>(this.RSC_EXCHANGE_TYPE_URL, requestBody, {observe: 'response'});
  }

  putExchangeType(id :string, requestBody :object) : Observable<HttpResponse<any>> {
    return this.httpClient.put<HttpResponse<any>>(`${this.RSC_EXCHANGE_TYPE_URL}/${id}`, requestBody, {observe:'response'})
  }

  deleteExchangeType(id :string) : Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(`${this.RSC_EXCHANGE_TYPE_URL}/${id}`, {observe:'response'})
  }
}
