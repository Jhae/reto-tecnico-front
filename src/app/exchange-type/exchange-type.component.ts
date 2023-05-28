import { ExchangeTypeResponse } from '../model/exchange-type-response';
import { ExchangeTypeService } from './../service/exchange-type.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exchange-type',
  templateUrl: './exchange-type.component.html',
  styleUrls: ['./exchange-type.component.css']
})
export class ExchangeTypeComponent {

  exchangeTypes :ExchangeTypeResponse[]

  constructor( private exchangeTypeService: ExchangeTypeService){ }

  ngOnInit(){
    this.loadExchangeTypes()
  }

  loadExchangeTypes():void {
    this.exchangeTypeService.getExchangeTypes()
      .subscribe(
        (response) => {
          this.exchangeTypes = response;
        }
      )
  }


}
