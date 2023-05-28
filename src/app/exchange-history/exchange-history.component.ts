
import { Component } from '@angular/core';
import { ExchangeHistoryResponse } from '../model/exchange-history-response';
import { ExchangeHistoryService } from '../service/exchange-history.service';

@Component({
  selector: 'app-exchange-history',
  templateUrl: './exchange-history.component.html',
  styleUrls: ['./exchange-history.component.css']
})
export class ExchangeHistoryComponent {

  exchangesHistory :ExchangeHistoryResponse[]

  constructor(private exchangeHistoryService :ExchangeHistoryService){}

  ngOnInit(){
    this.loadExchangesHistory()

  }

  loadExchangesHistory() :void {
    this.exchangeHistoryService.getExchangeHistory()
      .subscribe(
        (response) => {
          this.exchangesHistory = response
        }
      )
  }

}
