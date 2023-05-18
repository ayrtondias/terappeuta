import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricConsultPageRoutingModule } from './historic-consult-routing.module';

import { HistoricConsultPage } from './historic-consult.page';

import { LOCALE_ID, ɵregisterLocaleData } from '@angular/core';
import localePt from '@angular/common/locales/pt';

ɵregisterLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricConsultPageRoutingModule
  ],
  declarations: [HistoricConsultPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
})
export class HistoricConsultPageModule {}
