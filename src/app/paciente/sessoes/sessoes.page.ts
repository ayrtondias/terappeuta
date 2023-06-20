import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sessoes',
  templateUrl: './sessoes.page.html',
  styleUrls: ['./sessoes.page.scss'],
})
export class SessoesPage implements OnInit {

  paciente: any;
  psicologo: any;
  consultas: any;
  dataFormatada: any;
  idUsuarioLogado: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    const hoje = new Date();
    const dataFormatada = format(hoje, "yyyy-MM-dd");
    console.log("data Formatada: ", dataFormatada)


    this.consultas = firestore.collection('agenda' , ref => ref
    .orderBy('data', 'desc')
    .orderBy('inicio', 'desc')).valueChanges();
    console.log("Aqui: ", this.consultas);

    this.paciente = firestore.collection('paciente').valueChanges();
    this.psicologo = firestore.collection('usuario').valueChanges();
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

  mostrarDetalhes(id: any) {
    this.navCtrl.navigateForward('/det-psicologo/'+ id );
    console.log(id);
  }

}
