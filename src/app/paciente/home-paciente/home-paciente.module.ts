import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePacientePageRoutingModule } from './home-paciente-routing.module';

import { HomePacientePage } from './home-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePacientePageRoutingModule
  ],
  declarations: [HomePacientePage]
})
export class HomePacientePageModule {}
