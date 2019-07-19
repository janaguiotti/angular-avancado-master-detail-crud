import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { IndexComponent } from './index/index.component';
import { RegistrationManagementComponent } from './registration-management/registration-management.component';
import { PortabilityManagementComponent } from './portability-management/portability-management.component';
import { ConsolidatedPositionComponent } from './consolidated-position/consolidated-position.component';


@NgModule({
  declarations: [IndexComponent, RegistrationManagementComponent, PortabilityManagementComponent, ConsolidatedPositionComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
