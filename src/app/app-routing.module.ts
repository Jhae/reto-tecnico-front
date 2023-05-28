import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeTypeComponent } from './exchange-type/exchange-type.component';
import { ExchangeHistoryComponent } from './exchange-history/exchange-history.component';

const routes: Routes = [
  {path:'', redirectTo:'/exchange-types',pathMatch:'full'},
  {path:'exchange-type', component: ExchangeTypeComponent, pathMatch:'full'},
  {path:'exchange-history', component: ExchangeHistoryComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
