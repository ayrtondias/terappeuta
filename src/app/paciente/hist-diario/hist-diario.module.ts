import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistDiarioPageRoutingModule } from './hist-diario-routing.module';

import { HistDiarioPage } from './hist-diario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistDiarioPageRoutingModule
  ],
  declarations: [HistDiarioPage]
})
export class HistDiarioPageModule {}
