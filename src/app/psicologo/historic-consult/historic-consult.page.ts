import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-historic-consult',
  templateUrl: './historic-consult.page.html',
  styleUrls: ['./historic-consult.page.scss'],
})
export class HistoricConsultPage implements OnInit {

  consultas: any;
  dataFormatada: any;

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    const hoje = new Date();
    const dataFormatada = format(hoje, "yyyy-MM-dd");
    console.log("data Formatada: ", dataFormatada)


    this.consultas = firestore.collection('agenda' , ref => ref
    .where('data', '<=', dataFormatada)
    .orderBy('data', 'desc')
    .orderBy('inicio', 'desc')).valueChanges();
    console.log("Aqui: ", this.consultas);
   }

  ngOnInit() {
  }

}
