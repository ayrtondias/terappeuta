import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioPacientePage } from './diario-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioPacientePageRoutingModule {}
