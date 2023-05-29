import { ExchangeHistoryService } from './../service/exchange-history.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ExchangeTypeResponse } from '../model/exchange-type-response';
import { ExchangeTypeService } from './../service/exchange-type.service';
import { Component } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { GetCurrencyResponse } from '../model/response/get-currency-response';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-exchange-type',
  templateUrl: './exchange-type.component.html',
  styleUrls: ['./exchange-type.component.css']
})
export class ExchangeTypeComponent {

  exchangeTypes :ExchangeTypeResponse[]

  currencies: GetCurrencyResponse[]

  // Edicion de tipo de cambio
  displayEditExchange = false
  exchangeTypeToEdit :ExchangeTypeResponse
  editForm = this.formBuilder.group({
    'id': ['',Validators.required],
    'rate': ['',[Validators.required, Validators.min(0)]]
  })

  // Creacion de tipo de cambio
  displayCreateExchange = false
  createForm = this.formBuilder.group({
    'originCurrencyId': ['',Validators.required],
    'rate': ['',[Validators.required, Validators.min(0)]],
    'destinyCurrencyId': ['',Validators.required],
  })

  // Realizacion de cambio de moneda
  displayExchangeCurrency = false
  exchgTypeToUse : ExchangeTypeResponse
  exchangeCurrencyForm = this.formBuilder.group({
    'exchangeId': ['',[Validators.required]],
    'originAmount': ['',[Validators.required, Validators.min(0)]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private exchangeTypeService: ExchangeTypeService,
    private exchangeHistoryService: ExchangeHistoryService,
    private currencyService: CurrencyService
    ){ }

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

  prepareEditExchangeType( id :string ) :void{
    this.exchangeTypeToEdit = this.exchangeTypes
      .filter( item => item.id === id)[0]

    this.editForm.controls['id'].setValue(this.exchangeTypeToEdit.id)
    this.editForm.controls['rate'].setValue(this.exchangeTypeToEdit.rate)

    this.displayEditExchange = true
  }

  cancelExchangeType(){
    this.exchangeTypeToEdit = new ExchangeTypeResponse;
    this.displayEditExchange = false
  }


  updateExchangeType() :void {
    let id = this.editForm.get('id')?.value ?? ''
    let rate = this.editForm.get('rate')?.value?? 0 as number

    this.exchangeTypeService.putExchangeType(id, {'rate':rate})
      .subscribe(
        (response) => {
          if( !response.ok ){
            return
          }

          // Volver a cargar los tipos de cambios
          this.loadExchangeTypes()
          // Ocultar modal de edicion
          this.displayEditExchange = false
        }
      )
  }

  removeExchangeType(id: string) :void {

    this.exchangeTypeService.deleteExchangeType(id)
          .subscribe(
                  (response) => {
                    if(! response.ok){
                      return
                    }
                    // Volver a cargar los tipos de cambios
                    this.loadExchangeTypes()
                  }
                )
  }

  prepareCreateExchangeType() :void {
    this.currencyService.getCurrencies()
          .subscribe(
              (response) => {
                console.log("response");
                console.log(response);


                this.currencies = response;
                this.currencies.forEach(currency => currency.countriesNames = currency.countries.map(country => country.name))
                this.displayCreateExchange = true;
            }
          )
  }
  createExchangeType() :void {
    let originCurrencyId = this.createForm.get('originCurrencyId')?.value?? ''
    let rate = this.createForm.get('rate')?.value?? 0 as number
    let destinyCurrencyId = this.createForm.get('destinyCurrencyId')?.value?? ''

    let requestBody = {
      originCurrency : originCurrencyId,
      rate: rate,
      destinyCurrency: destinyCurrencyId
    }

    this.exchangeTypeService.postExchangeType(requestBody)
      .subscribe(
        (response:HttpResponse<any>) => {
          if( !response.ok )
          {
            return
          }
          // Volver a cargar los tipos de cambios
          this.loadExchangeTypes()
          // Ocultar modal para agregar cambio
          this.displayCreateExchange = false
        }
      )
  }

  prepareExchangeCurrency(id: string) :void {
    //TODO
    this.exchgTypeToUse = this.exchangeTypes.find(
        exchType => exchType.id === id
      ) ?? new ExchangeTypeResponse
    this.exchangeCurrencyForm.controls['exchangeId'].setValue(this.exchgTypeToUse.id)

    const originCountries = this.exchgTypeToUse.originCurrency.countries
    this.exchgTypeToUse.originCurrency.countriesNames = originCountries.map(oCountry => oCountry.name)
    console.log(this.exchgTypeToUse.originCurrency.countriesNames);


    const destinyCountries = this.exchgTypeToUse.destinyCurrency.countries
    this.exchgTypeToUse.destinyCurrency.countriesNames = destinyCountries.map(dCountry => dCountry.name)

    this.displayExchangeCurrency = true
  }

  cancelExchangeCurrency() :void {
    this.exchgTypeToUse = new ExchangeTypeResponse;
    this.displayExchangeCurrency = false
  }

  exchangeCurrency() :void {
    let exchangeId = this.exchangeCurrencyForm.get('exchangeId')?.value
    let originAmount = this.exchangeCurrencyForm.get('originAmount')?.value

    let requestBody = {exchangeId, originAmount}
    this.exchangeHistoryService.makeCurrencyExchange(requestBody)
      .subscribe(
        (response:HttpResponse<any>) => {
          if(!response.ok )
          {
            return
          }
          this.exchgTypeToUse = new ExchangeTypeResponse
        }
      )
  }
}
