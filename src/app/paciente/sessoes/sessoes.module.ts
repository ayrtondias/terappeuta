import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessoesPageRoutingModule } from './sessoes-routing.module';

import { SessoesPage } from './sessoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessoesPageRoutingModule
  ],
  declarations: [SessoesPage]
})
export class SessoesPageModule {}
