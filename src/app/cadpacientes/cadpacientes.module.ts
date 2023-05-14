import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadpacientesPageRoutingModule } from './cadpacientes-routing.module';

import { CadpacientesPage } from './cadpacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadpacientesPageRoutingModule
  ],
  declarations: [CadpacientesPage]
})
export class CadpacientesPageModule {}
