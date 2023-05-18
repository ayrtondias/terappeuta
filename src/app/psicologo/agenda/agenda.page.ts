import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  public hoje = new Date();
  public diaFormatado = parseInt(format(this.hoje, "dd"));


  usuario: any;
  agendaDia: any;
  dataFormatada: any;
  //dataFormatada1: any;
  selectedDate: any;

  public dia: number = this.diaFormatado;


  public dataFormatada1 = format(this.hoje, "yyyy-MM-") + this.dia;



  incrementarContador() {
    this.dia++;
    //console.log("CONTADOR: ", this.dia);
    this.agendaDia = this.firestore.collection('agenda' , ref => ref.where('data', '==', format(this.hoje, "yyyy-MM-") + this.dia).orderBy('inicio', 'asc')).valueChanges();
    console.log("Aqui: ",this.agendaDia);
  }

  decrementarContador() {
    this.dia--;
    //console.log("CONTADOR: ", this.dia);
    this.agendaDia = this.firestore.collection('agenda' , ref => ref.where('data', '==', format(this.hoje, "yyyy-MM-") + this.dia).orderBy('inicio', 'asc')).valueChanges();
  }


  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {

    const hoje = new Date();



    const dataFormatada2 = format(hoje, "yyyy-MM-dd");
    console.log(dataFormatada2);



    console.log("data formatada",this.dataFormatada1);



    this.dataFormatada = format(hoje, " 'de' MMMM 'de' yyyy", { locale: ptBR });
    console.log(this.dataFormatada);

    this.usuario = firestore.collection('usuario').valueChanges();
    console.log(this.usuario);

    this.agendaDia = firestore.collection('agenda' , ref => ref.where('data', '==', format(this.hoje, "yyyy-MM-") + this.dia).orderBy('inicio', 'asc')).valueChanges();
    console.log("Aqui: ",this.agendaDia);

    console.log(this.selectedDate);




  }

  ngOnInit() {
  }



}
