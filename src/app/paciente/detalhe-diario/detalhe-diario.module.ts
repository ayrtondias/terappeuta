import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheDiarioPageRoutingModule } from './detalhe-diario-routing.module';

import { DetalheDiarioPage } from './detalhe-diario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheDiarioPageRoutingModule
  ],
  declarations: [DetalheDiarioPage]
})
export class DetalheDiarioPageModule {}
