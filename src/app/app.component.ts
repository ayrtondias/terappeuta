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
    { title: 'Home', url: '/home', icon: '' },
    { title: 'Agenda', url: '/agenda', icon: '' },
    { title: 'Histórico de consulta', url: '/historic-consult', icon: '' },
    { title: 'Pacientes', url: '/pacientes', icon: '' },
    { title: 'Cadastrar pacientes', url: '/cadpacientes', icon: '' },
    { title: 'Configuração', url: '/configuracao', icon: '' },
  ];

  public appPagesPaciente = [
    { title: 'Home', url: '/home-paciente', icon: '' },
  ];
  constructor(public router: Router) {}



  public psicologo(link: any) {
    const url = this.router.url;
    if(url == '/home'){
      link = '/home';
      console.log('mostrar', url);
    } else
    if(url == '/historic-consult'){
      link = '/historic-consult';
    } else
    if(url == '/agenda'){
      link = '/agenda';
    } else
    if(url == '/detalhes'){
      link = '/detalhes';
    } else
    if(url == '/notificacoes'){
      link = '/notificacoes';
    } else
    if(url == '/publicacao'){
      link = '/publicacao';
    } else
    if(url == '/pacientes'){
      link = '/historic-consult';
    } else
    if(url == '/cadpacientes'){
      link = '/cadpacientes';
    }else
    if(url == '/configuracao'){
      link = '/configuracao';
    };
  }

  paciente(link: any) {
    const url = this.router.url;
    if(url == '/home-paciente'){
      link = '/home-paciente';
    };
  }

  ngOnInit() {
    this.url1 = ['/home', '/agenda', '/historic-consult', '/detalhes', '/notificacoes',
    '/publicacao', '/pacientes', '/cadpacientes', '/configuracao']; // Adicione as URLs desejadas ao array

    this.url2 = ['/home-paciente'];
  }

}
