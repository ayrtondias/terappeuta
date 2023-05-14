import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Agenda', url: '/agenda', icon: '' },
    { title: 'Histórico de consulta', url: '/historic-consult', icon: '' },
    { title: 'Pacientes', url: '/pacientes', icon: '' },
    { title: 'Cadastrar pacientes', url: '/cadpacientes', icon: '' },
    { title: 'Configuração', url: '/configuracao', icon: '' },

  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
