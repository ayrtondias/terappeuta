import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';


@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.page.html',
  styleUrls: ['./home-paciente.page.scss'],
})
export class HomePacientePage implements OnInit {
  //publicacoes: any;
  usuarios: any;
  horario: Array<any> = new Array;
  publicacoes: Observable<any[]>

  imageUploads = [];
  arquivo: any;



  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    private fireAuth: AngularFireAuth
  ) {

    this.publicacoes = this.firestore.collection('publicacoes', ref =>
    ref.orderBy('data', 'desc').orderBy('hora', 'desc')).valueChanges();

    this.usuarios = this.firestore.collection('usuario').valueChanges();


  }

  ngOnInit() {
  }
}

