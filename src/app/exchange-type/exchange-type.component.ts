import { UpdateExchangeTypeRequest } from './../model/request/update-exchange-type-request';
import { FormBuilder, Validators } from '@angular/forms';
import { ExchangeTypeResponse } from '../model/exchange-type-response';
import { ExchangeTypeService } from './../service/exchange-type.service';
import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-exchange-type',
  templateUrl: './exchange-type.component.html',
  styleUrls: ['./exchange-type.component.css']
})
export class ExchangeTypeComponent {

  exchangeTypes :ExchangeTypeResponse[]

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
    'id': ['',Validators.required],
    'rate': ['',[Validators.required, Validators.min(0)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private exchangeTypeService: ExchangeTypeService
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

}
