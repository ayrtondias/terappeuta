import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { format } from 'date-fns';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-diario-emocional',
  templateUrl: './diario-emocional.page.html',
  styleUrls: ['./diario-emocional.page.scss'],
})
export class DiarioEmocionalPage implements OnInit {
  emocao = '';
  msg = '';
  formattedDate: any;
  formattedTime: any;
  dataFomateDB: any;

  idUsuarioLogado: string = '';

  divSelecionada: string = '';;

  select(selecao: string){
    console.log('seleção:', selecao);
    this.emocao = selecao;
  }


  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private fireAuth: AngularFireAuth,
    public storage: AngularFireStorage,
    public firestore: AngularFirestore
  ) {

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleString();
    this.formattedDate = format(dataAtual, 'dd/MM/yyyy');
    this.dataFomateDB = format(dataAtual, 'yyyy-MM-dd');
    this.formattedTime = format(dataAtual, 'HH:mm');

    console.log("",this.emocao);

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });


   }

  ngOnInit() {

  }

  selecionarDiv(nomeDiv: string) {
    this.divSelecionada = nomeDiv;
  }

  cadastrar(){
    this.presentAlert();
  }

  async presentAlert() {
    this.firestore.collection('diario-emocional').doc().set({
      data: this.dataFomateDB,
      hora: this.formattedTime,
      emocao: this.emocao,
      msg: this.msg,
      idUser: this.idUsuarioLogado
    });
    this.router.navigateByUrl('hist-diario');
    this.presentToast('Diario salvo com sucesso.');
  }

  async presentToast( mensagem: string ) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'middle'
    });
    await toast.present();
  }

}
