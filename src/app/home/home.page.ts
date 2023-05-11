import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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



  constructor(
    private router: Router,
    public firestore: AngularFirestore,
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
        console.log('Name:', data);
        this.horario = data;

      });
    });

    /*const dataPostagem = this.publicacoes.data;
    const distanciaEmPalavras = formatDistanceToNow(dataPostagem, { addSuffix: true});
    this.data = distanciaEmPalavras;*/

  }

  ngOnInit() {
  }

  /*publicacoes = [
    {
      titulo: 'Minha primeira publicação',
      data: '2023-04-26',
      conteudo: 'Este é o conteúdo da minha primeira publicação.'
    },
    {
      titulo: 'Minha segunda publicação',
      data: '2023-04-25',
      conteudo: 'Este é o conteúdo da minha segunda publicação.'
    },
    {
      titulo: 'Minha terceira publicação',
      data: '2023-04-24',
      conteudo: 'Este é o conteúdo da minha terceira publicação.'
    }
  ];*/

}
