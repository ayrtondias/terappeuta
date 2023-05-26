import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetPsicologoPageRoutingModule } from './det-psicologo-routing.module';

import { DetPsicologoPage } from './det-psicologo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetPsicologoPageRoutingModule
  ],
  declarations: [DetPsicologoPage]
})
export class DetPsicologoPageModule {}
