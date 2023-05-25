import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetPsicologoPageRoutingModule } from './det-psicologo-routing.module';

import { DetPsicologoPage } from './det-psicologo.page';

import { AvaliacaoComponent } from '../../component/avaliacao/avaliacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetPsicologoPageRoutingModule
  ],
  declarations: [DetPsicologoPage, AvaliacaoComponent]
})
export class DetPsicologoPageModule {}
