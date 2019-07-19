import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortabilityRoutingModule } from './portability-routing.module';
import { BancoDoBrasilComponent } from './banco-do-brasil/banco-do-brasil.component';
import { BancoItauComponent } from './banco-itau/banco-itau.component';
import { BancoGenialComponent } from './banco-genial/banco-genial.component';
import { BancoXpComponent } from './banco-xp/banco-xp.component';
import { BancoBtgComponent } from './banco-btg/banco-btg.component';
import { BancoGuideComponent } from './banco-guide/banco-guide.component';
import { BancoSantanderComponent } from './banco-santander/banco-santander.component';
import { BancoBradescoComponent } from './banco-bradesco/banco-bradesco.component';


@NgModule({
  declarations: [BancoDoBrasilComponent, BancoItauComponent, BancoGenialComponent, BancoXpComponent, BancoBtgComponent, BancoGuideComponent, BancoSantanderComponent, BancoBradescoComponent],
  imports: [
    CommonModule,
    PortabilityRoutingModule
  ]
})
export class PortabilityModule { }
