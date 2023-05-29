import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeTypeComponent } from './exchange-type/exchange-type.component';
import { ExchangeHistoryComponent } from './exchange-history/exchange-history.component';
import { ROLES } from './util/roles-const';
import { authGuard } from './guard/auth.guard';
import { roleGuard } from './guard/role.guard';

const routes: Routes = [
  {path:'', redirectTo:'/exchange-type',pathMatch:'full'},
  {path:'exchange-type', component: ExchangeTypeComponent },
  {path:'exchange-history', component: ExchangeHistoryComponent, canActivate: [authGuard,roleGuard], data:{roles:[ROLES.ADMIN]}},
  //{path:'**',redirectTo:'/exchange-type', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
