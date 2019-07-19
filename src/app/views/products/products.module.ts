import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';


@NgModule({
  declarations: [SellComponent, BuyComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
