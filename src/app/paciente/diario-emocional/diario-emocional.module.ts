import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioEmocionalPageRoutingModule } from './diario-emocional-routing.module';

import { DiarioEmocionalPage } from './diario-emocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioEmocionalPageRoutingModule
  ],
  declarations: [DiarioEmocionalPage]
})
export class DiarioEmocionalPageModule {}
