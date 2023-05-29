import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hist-diario',
  templateUrl: './hist-diario.page.html',
  styleUrls: ['./hist-diario.page.scss'],
})
export class HistDiarioPage implements OnInit {
  loading: HTMLIonLoadingElement | undefined;
  diarios: any;
  pacientes: any;

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private fireAuth: AngularFireAuth
  ) {
    this.diarios = firestore.collection("diario-emocional", ref =>
    ref.orderBy('data', 'desc').orderBy('hora', 'desc')).valueChanges({idField: 'id'});

    this.pacientes = firestore.collection("paciente").valueChanges({idField: 'id'});


  }

  ngOnInit() {
  }

  mostrarDetalhes(id: any) {
    this.navCtrl.navigateForward('/detalhe-diario/'+ id );
    console.log(id);
  }



  deletarItem(id: any){
    this.presentAlert(id);
  }

  async presentAlert(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirme',
      message: 'deseja excluir o diario em questão?',
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
              const documentId = id;

              this.firestore.collection('diario-emocional')
              .doc(documentId)
              .delete();
          }
          catch(deuErro){
            console.log(JSON.stringify(deuErro));
              this.presentToast('Erro ao deletar o item');
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

  private async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde...'
    });

    this.loading.present();
  }

}
