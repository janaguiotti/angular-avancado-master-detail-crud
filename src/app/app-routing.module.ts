import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './views/login/login.module#LoginModule' },
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'customer', loadChildren: './views/customer/customer.module#CustomerModule' },
  { path: 'dashboards', loadChildren: './views/dashboards/dashboards.module#DashboardsModule' },
  { path: 'products', loadChildren: './views/products/products.module#ProductsModule' },
  { path: 'portability', loadChildren: './views/portability/portability.module#PortabilityModule' },
  { path: 'platform', loadChildren: './views/platform/platform.module#PlatformModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
