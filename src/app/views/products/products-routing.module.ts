import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';


const routes: Routes = [
  { path: '', component: SellComponent },
  { path: 'buy', component: BuyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
