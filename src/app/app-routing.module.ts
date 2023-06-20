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
    path: 'detalhes/:id',
    loadChildren: () => import('./psicologo/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'home-paciente',
    loadChildren: () => import('./paciente/home-paciente/home-paciente.module').then( m => m.HomePacientePageModule)
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./paciente/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule)
  },
  {
    path: 'det-psicologo/:id',
    loadChildren: () => import('./paciente/det-psicologo/det-psicologo.module').then( m => m.DetPsicologoPageModule)
  },
  {
    path: 'diario-emocional',
    loadChildren: () => import('./paciente/diario-emocional/diario-emocional.module').then( m => m.DiarioEmocionalPageModule)
  },
  {
    path: 'hist-diario',
    loadChildren: () => import('./paciente/hist-diario/hist-diario.module').then( m => m.HistDiarioPageModule)
  },
  {
    path: 'detalhe-diario/:id',
    loadChildren: () => import('./paciente/detalhe-diario/detalhe-diario.module').then( m => m.DetalheDiarioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'diario-paciente/:id',
    loadChildren: () => import('./psicologo/diario-paciente/diario-paciente.module').then( m => m.DiarioPacientePageModule)
  },
  {
    path: 'detalhe-diario-paciente/:id',
    loadChildren: () => import('./psicologo/detalhe-diario-paciente/detalhe-diario-paciente.module').then( m => m.DetalheDiarioPacientePageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./paciente/agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'sessoes',
    loadChildren: () => import('./paciente/sessoes/sessoes.module').then( m => m.SessoesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
