import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheDiarioPage } from './detalhe-diario.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheDiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheDiarioPageRoutingModule {}
