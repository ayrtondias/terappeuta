import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePacientePage } from './home-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: HomePacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePacientePageRoutingModule {}
