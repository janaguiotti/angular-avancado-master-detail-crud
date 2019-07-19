import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RegisterComponent } from './register/register.component';
import { WalletComponent } from './wallet/wallet.component';
import { MaturityComponent } from './maturity/maturity.component';
import { RescuesComponent } from './rescues/rescues.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [RegisterComponent, WalletComponent, MaturityComponent, RescuesComponent, ProfileComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
