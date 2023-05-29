import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  psicologo: any;
  pacientes: any;
  idUsuarioLogado: string = '';

  inicio: any;
  fim: any;

  searchTerm: string = '';
  searchResults!: Observable<any[]>;

    constructor(
      private router: Router,
      private navCtrl: NavController,
      public firestore: AngularFirestore,
      private fireAuth: AngularFireAuth
    ) {

      this.psicologo = firestore.collection('usuario' , ref => ref.orderBy('nome', 'asc')).valueChanges({idField: 'id'});
      console.log(this.psicologo);
      this.pacientes = firestore.collection('paciente').valueChanges({idField: 'id'})

     }



  ngOnInit() {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });
  }

  mostrarDetalhes(inicio: string, fim: string) {
    this.inicio = inicio;
    console.log("inicio: ", inicio);
    this.fim = fim;
    console.log("fim: ", fim)
  }

}
