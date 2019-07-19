import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
import { MaturityComponent } from './maturity/maturity.component';
import { RescuesComponent } from './rescues/rescues.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: WalletComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'maturity', component: MaturityComponent },
  { path: 'rescues', component: RescuesComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
