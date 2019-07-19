import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoDoBrasilComponent } from './banco-do-brasil/banco-do-brasil.component';
import { BancoItauComponent } from './banco-itau/banco-itau.component';
import { BancoGenialComponent } from './banco-genial/banco-genial.component';
import { BancoXpComponent } from './banco-xp/banco-xp.component';
import { BancoBtgComponent } from './banco-btg/banco-btg.component';
import { BancoGuideComponent } from './banco-guide/banco-guide.component';
import { BancoSantanderComponent } from './banco-santander/banco-santander.component';
import { BancoBradescoComponent } from './banco-bradesco/banco-bradesco.component';


const routes: Routes = [
  { path: '', component: BancoDoBrasilComponent },
  { path: 'itau', component: BancoItauComponent },
  { path: 'genial', component: BancoGenialComponent },
  { path: 'xp', component: BancoXpComponent },
  { path: 'btg', component: BancoBtgComponent },
  { path: 'guide', component: BancoGuideComponent },
  { path: 'santander', component: BancoSantanderComponent },
  { path: 'bradesco', component: BancoBradescoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortabilityRoutingModule { }
