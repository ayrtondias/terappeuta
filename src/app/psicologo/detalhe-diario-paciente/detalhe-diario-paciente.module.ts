import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheDiarioPacientePageRoutingModule } from './detalhe-diario-paciente-routing.module';

import { DetalheDiarioPacientePage } from './detalhe-diario-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheDiarioPacientePageRoutingModule
  ],
  declarations: [DetalheDiarioPacientePage]
})
export class DetalheDiarioPacientePageModule {}
