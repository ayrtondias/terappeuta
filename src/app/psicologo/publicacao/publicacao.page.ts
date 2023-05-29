import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { format } from 'date-fns';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage implements OnInit {
  data = "";
  hora = "";
  conteudo = '';

  habilitaSalvar = false;

  idUsuarioLogado: string = '';
  user: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private fireAuth: AngularFireAuth,
    public storage: AngularFireStorage,
    public firestore: AngularFirestore
  ) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });

  }

  ngOnInit() {

    setInterval(()=>{
      this.habilitaSalvar=!this.habilitaSalvar;
    }, 500);
  }





  cadastrar(){
    this.presentAlert();
  }

  async presentAlert() {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleString();
    const formattedDate = format(dataAtual, 'yyyy-MM-dd');
    const formattedTime = format(dataAtual, 'HH:mm:ss');


    this.firestore.collection('publicacoes').add({
      conteudo: this.conteudo,
      data: formattedDate,
      hora: formattedTime,
      idUser: this.idUsuarioLogado
    });
    this.router.navigateByUrl('home');
  }

}
