import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { OfficeComponent } from './office/office.component';
import { BranchComponent } from './branch/branch.component';
import { ManagerComponent } from './manager/manager.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [OfficeComponent, BranchComponent, ManagerComponent, AdvisorComponent, CustomerComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule { }
