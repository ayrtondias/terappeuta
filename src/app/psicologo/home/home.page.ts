import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  //publicacoes: any;
  usuario: any;
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

    this.usuario = firestore.collection('usuario').valueChanges();
    console.log(this.usuario);

    this.publicacoes = firestore.collection('publicacoes', ref =>
    ref.orderBy('data', 'desc').orderBy('hora', 'desc')).valueChanges();
    console.log(this.publicacoes);

    this.firestore.collection('publicacoes').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.get('data');
        console.log(data);
        this.horario = data;

      });
    });


  }

  ngOnInit() {
  }

}
