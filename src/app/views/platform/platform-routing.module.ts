import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeComponent } from './office/office.component';
import { BranchComponent } from './branch/branch.component';
import { ManagerComponent } from './manager/manager.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  { path: '', component: OfficeComponent },
  { path: 'branch', component: BranchComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'advisor', component: AdvisorComponent },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
