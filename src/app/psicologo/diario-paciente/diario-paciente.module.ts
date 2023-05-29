import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioPacientePageRoutingModule } from './diario-paciente-routing.module';

import { DiarioPacientePage } from './diario-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioPacientePageRoutingModule
  ],
  declarations: [DiarioPacientePage]
})
export class DiarioPacientePageModule {}
