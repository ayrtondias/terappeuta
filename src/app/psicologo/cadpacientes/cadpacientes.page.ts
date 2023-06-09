import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FirebaseError } from 'firebase/app'
import { Validate } from '../../util/validate';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { identity } from 'rxjs';


@Component({
  selector: 'app-cadpacientes',
  templateUrl: './cadpacientes.page.html',
  styleUrls: ['./cadpacientes.page.scss'],
})
export class CadpacientesPage implements OnInit {
  loading!: HTMLIonLoadingElement;
  idUsuarioLogado: string = '';
  id: any;
  nome = '';
  nascimento = '';
  cpf= '';
  rg= '';
  telefone = '';
  email = '';
  sexo= '';
  senha= '123456';
  plano= '';
  valor= '';
  habilitaSalvar = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {

   }

  ngOnInit() {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });

    setInterval(()=>{
      this.habilitaSalvar=!this.habilitaSalvar;
    }, 500);
  }

  cadastrar(){
    this.presentAlert();
  }

  canSave(): boolean{
    const emailValid = Validate.validateEmail(this.email);
    const cpfValid = this.cpf.length >= 11;

    return emailValid! && cpfValid!;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirme os dados',
      message: 'Leia seus dados atentamente e confirme: seus dados estão corretos?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Você cancelou...');
          }
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: async () => {
            await this.showLoading();
            try{
              const resultado = await this.fireAuth.createUserWithEmailAndPassword(this.email, this.senha);
              console.log(resultado);

              const uid = resultado.user!.uid;
              this.firestore.collection('paciente').doc(uid).set({
                id: uid,
                email: this.email,
                nome: this.nome,
                cpf: this.cpf,
                rg: this.rg,
                nascimento: this.nascimento,
                telefone: this.telefone,
                sexo: this.sexo,
                plano: this.plano,
                valor: this.valor,
                idPsico: this.idUsuarioLogado
              });
              this.router.navigateByUrl('pacientes');
              this.presentToast('Paciente criado com sucesso. Agora faça o login para acessar o sistema!');
            }
            catch(error){
              console.log(JSON.stringify(error));
                if (error instanceof FirebaseError) {
                  if(error.code === 'auth/email-already-in-use'){
                    this.presentToast('Este e-mail já está sendo utilizado!');
                  }else if(error.code === 'auth/weak-password'){
                    this.presentToast('Senha fraca. Tente outra senha!');
                  }else{
                    this.presentToast('Erro desconhecido.');
                  }
                }
            }
            await this.fecharLoading();
          }
        },
      ],

    });

    await alert.present();
  }

  async presentToast( mensagem: string ) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
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

}
