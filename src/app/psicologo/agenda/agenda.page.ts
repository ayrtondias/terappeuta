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

  paciente: any;
  usuario: any;
  agendaDia: any;
  dataFormatada: any;
  //dataFormatada1: any;
  public selectedDate: string = '';

  idUsuarioLogado: string = '';

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    this.usuario = firestore.collection('usuario').valueChanges();
    console.log(this.usuario);

    this.paciente = firestore.collection('paciente').valueChanges({idField: 'id'});
    console.log(this.paciente);

  }

  ngOnInit() {
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
    this.banco(this.selectedDate);


    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });
  }

  incrementarContador() {
    const currentDate = new Date(this.selectedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    this.selectedDate = currentDate.toISOString().split('T')[0];
    this.banco(this.selectedDate);
  }

  decrementarContador() {
    const currentDate = new Date(this.selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    this.selectedDate = currentDate.toISOString().split('T')[0];
    this.banco(this.selectedDate);
  }

  onDateInput(event: any) {
    this.selectedDate =  event.target.value;
    this.banco(this.selectedDate);

  }

  banco(selectedDate: any){
    this.agendaDia = this.firestore.collection('agenda' , ref => ref.where('data', '==', selectedDate).orderBy('inicio', 'asc')).valueChanges();
    console.log("Aqui: ",this.agendaDia);
  }

}
