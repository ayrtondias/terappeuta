import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadpacientesPage } from './cadpacientes.page';

const routes: Routes = [
  {
    path: '',
    component: CadpacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadpacientesPageRoutingModule {}
