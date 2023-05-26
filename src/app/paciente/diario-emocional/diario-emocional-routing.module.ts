import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioEmocionalPage } from './diario-emocional.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioEmocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioEmocionalPageRoutingModule {}
