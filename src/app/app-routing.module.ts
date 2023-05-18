import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./psicologo/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'publicacao',
    loadChildren: () => import('./psicologo/publicacao/publicacao.module').then( m => m.PublicacaoPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./psicologo/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./psicologo/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'historic-consult',
    loadChildren: () => import('./psicologo/historic-consult/historic-consult.module').then( m => m.HistoricConsultPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./psicologo/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'cadpacientes',
    loadChildren: () => import('./psicologo/cadpacientes/cadpacientes.module').then( m => m.CadpacientesPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./psicologo/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'login-paciente',
    loadChildren: () => import('./login-paciente/login-paciente.module').then( m => m.LoginPacientePageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./psicologo/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
