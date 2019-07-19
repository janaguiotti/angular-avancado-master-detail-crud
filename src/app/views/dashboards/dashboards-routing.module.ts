import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { RegistrationManagementComponent } from './registration-management/registration-management.component';
import { PortabilityManagementComponent } from './portability-management/portability-management.component';
import { ConsolidatedPositionComponent } from './consolidated-position/consolidated-position.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'registration-management', component: RegistrationManagementComponent },
  { path: 'portability-management', component: PortabilityManagementComponent },
  { path: 'consolidated-position', component: ConsolidatedPositionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
