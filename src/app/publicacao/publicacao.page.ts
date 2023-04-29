import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { format } from 'date-fns';



@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage implements OnInit {
  data = "";
  conteudo = '';
  habilitaSalvar = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    public firestore: AngularFirestore
  ) { }

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
    const dataFormatada = dataAtual.toLocaleString();;

    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Confirmar envio?',
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
            try{
              this.firestore.collection('publicacoes').add({
              conteudo: this.conteudo,
              data: dataFormatada,

              });
              this.router.navigateByUrl('home');
              this.presentToast('Doação registrada com sucesso.');
            }
            catch(deuErro){
              console.log(JSON.stringify(deuErro));
                this.presentToast('');
            }
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


}
