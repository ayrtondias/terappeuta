 import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, combineLatest } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading!: HTMLIonLoadingElement;
  publicacoes: any;
  //usuarios: any;
  horario: Array<any> = new Array;
  //publicacoes: Observable<any[]>
  //publicacoes: any[] = [];
 //usuarios: any[] = [];
 usuarioId: any;
 docId:  any[] = [];

 tamanho: any;

  id: any;
  idUser: any;

  imageUploads = [];
  arquivo: any;

  usuarios: Observable<any[]>;

  idUsuarioLogado: string = '';


  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    private fireAuth: AngularFireAuth
  ) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });



    this.publicacoes = this.firestore.collection('publicacoes', ref =>
    ref.orderBy('data', 'desc').orderBy('hora', 'desc')).valueChanges({idField: 'id'});

    this.usuarios = this.firestore.collection('usuario').valueChanges({idField: 'id'});


  }

  ngOnInit() {

  }

  compararColecoes(): void {
    const colecao1$ = this.firestore.collection('publicacoes').valueChanges();
    const colecao2$ = this.firestore.collection('usuario').valueChanges();

    combineLatest([colecao1$, colecao2$]).subscribe(([dadosColecao1, dadosColecao2]) => {
      const valoresIguais = dadosColecao1.some(item1 => dadosColecao2.includes(item1));
      if (valoresIguais) {
        // Os arrays têm valores iguais
        console.log('Os arrays têm valores iguais');
      } else {
        // Os arrays não têm valores iguais
        console.log('Os arrays não têm valores iguais');
      }
    });
  }

  deletarItem(id: any, idUser: any){
    if(this.idUsuarioLogado == idUser){
    this.presentAlert(id);
    } else{
      console.error('não pode excluir')
    }
  }

  async presentAlert(id: any) {

    const documentId = id;
    this.firestore.collection('publicacoes')
    .doc(documentId)
    .delete();
  }

}
