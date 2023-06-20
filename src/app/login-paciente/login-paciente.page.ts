import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Validate } from '../util/validate';
import { NavController } from '@ionic/angular';
import { error } from 'console';

@Component({
  selector: 'app-login-paciente',
  templateUrl: './login-paciente.page.html',
  styleUrls: ['./login-paciente.page.scss'],
})
export class LoginPacientePage implements OnInit {

  loading!: HTMLIonLoadingElement;
  contador = 0;
  usuario: any;
  documentos: any;
  id = '';
  email = '';
  senha = '';


  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private navCtrl: NavController,
    private fireAuth: AngularFireAuth
  ) {  }

  ngOnInit() {
  }

  async presentToast( mensagem: string ) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'middle'
    });
    await toast.present();
  }

  canSave(): boolean{
    const emailValid = Validate.validateEmail(this.email);
    const senhaValid = this.senha !== '' && this.senha.length >= 6;

    return emailValid! && senhaValid!;
  }

  async entrar(){
    this.showLoading();
    console.log('entrando...');
    try{
      const result = await this.fireAuth.signInWithEmailAndPassword(this.email, this.senha);

      const uid = result.user!.uid;
      console.log(uid);

      this.usuario = this.firestore.collection('paciente')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            if (doc.id === uid) {
              this.router.navigateByUrl('home-paciente');
              this.presentToast('Bem vindo!');
            }
          });
        } else {
          console.log('Usuário ou senha incorretos!');
    }
      console.log(this.documentos);
    })
    }
    catch(erroQueOcorreu){
      console.log(erroQueOcorreu);
    }
    await this.fecharLoading();
  }


  getEmailMaiusculo(){
    return this.email.toUpperCase();
  }

  private async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde...'
    });

    this.loading.present();
  }

  private async fecharLoading(){
    await this.loading.dismiss();
  }

  nav(){
    return this.navCtrl.navigateForward('/cadastro');
  }

}
