import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetPsicologoPage } from './det-psicologo.page';

const routes: Routes = [
  {
    path: '',
    component: DetPsicologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetPsicologoPageRoutingModule {}
