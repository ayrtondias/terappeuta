import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  url1: string[] = [];
  url2: string[] = [];

  idUsuarioLogado: string = '';
  pacientes: any;
  psicologo: any;

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
    { title: 'Diário emocional', url: '/diario-emocional' },
    { title: 'Acompanhamento', url: '/acompanhamento' },
    { title: 'Agendamento', url: '/agendamento' },
    { title: 'Sessões', url: '/sessoes' },
    { title: 'Configuração', url: '/config-paciente' },
  ];
  constructor(
    private fireAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public router: Router
    ) {
      this.psicologo = firestore.collection('usuario').valueChanges({idField: 'id'});
      console.log("retono: ",this.psicologo);
      this.pacientes = firestore.collection('paciente').valueChanges({idField: 'id'});

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
        console.log(this.idUsuarioLogado);
      } else {
        console.log("erro");
      }
    });

  }

  ngOnInit() {
    this.url1 = ['/home', '/agenda', '/historic-consult',
     '/detalhes', '/notificacoes','/publicacao',
     '/pacientes', '/cadpacientes', '/configuracao',
     '/diario-paciente/', '/detalhe-diario-paciente']; // Adicione as URLs desejadas ao array

    this.url2 = ['/home-paciente', '/cadastro', '/diario-emocional',
    '/hist-diario', 'editar-diario', '/detalhe-diario', '/acompanhamento',
    '/det-psicologo', '/agendamento', '/sessoes', '/pagamentos',
    '/config-paciente'];
  }


}
