import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  url1: string[] = [];
  url2: string[] = [];

  public appPages = [
    { title: 'Home', url: '/home' },
    { title: 'Agenda', url: '/agenda' },
    { title: 'Histórico de consulta', url: '/historic-consult' },
    { title: 'Pacientes', url: '/pacientes' },
    { title: 'Cadastrar pacientes', url: '/cadpacientes' },
    { title: 'Configuração', url: '/configuracao' },
  ];

  public appPagesPaciente = [
    { title: 'Home', url: '/home-paciente' },
    { title: 'Cadastro', url: '/cadastro' },
    { title: 'Diário emocional', url: '/diario-emocional' },
    { title: 'Acompanhamento', url: '/acompanhamento' },
    { title: 'Agendamento', url: '/agendamento' },
    { title: 'Sessões', url: '/sessoes' },
    { title: 'Pagamentos', url: '/pagamentos' },
    { title: 'Configuração', url: '/config-paciente' },
  ];
  constructor(public router: Router) {}

  ngOnInit() {
    this.url1 = ['/home', '/agenda', '/historic-consult',
     '/detalhes', '/notificacoes','/publicacao',
     '/pacientes', '/cadpacientes', '/configuracao']; // Adicione as URLs desejadas ao array

    this.url2 = ['/home-paciente', '/cadastro', '/diario-emocional',
    '/hist-diario', 'editar-diario', '/detalhe-diario', '/acompanhamento',
    '/det-psicologo', '/agendamento', '/sessoes', '/pagamentos',
    '/config-paciente'];
  }

}
