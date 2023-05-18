import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricConsultPage } from './historic-consult.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricConsultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricConsultPageRoutingModule {}
