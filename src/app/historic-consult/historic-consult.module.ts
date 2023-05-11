import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricConsultPageRoutingModule } from './historic-consult-routing.module';

import { HistoricConsultPage } from './historic-consult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricConsultPageRoutingModule
  ],
  declarations: [HistoricConsultPage]
})
export class HistoricConsultPageModule {}
