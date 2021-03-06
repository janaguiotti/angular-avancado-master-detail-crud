import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './form/form.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
