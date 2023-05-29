import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheDiarioPacientePage } from './detalhe-diario-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheDiarioPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheDiarioPacientePageRoutingModule {}
