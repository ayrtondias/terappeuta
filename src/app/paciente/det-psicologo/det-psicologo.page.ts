import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { identity } from 'rxjs';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';


@Component({
  selector: 'app-det-psicologo',
  templateUrl: './det-psicologo.page.html',
  styleUrls: ['./det-psicologo.page.scss'],
})
export class DetPsicologoPage implements OnInit {
psicologo: any;
estrela = '';
msg: any;
avaliacao: string = '';

stars: number[] = [1, 2, 3, 4, 5];

selectedValue: number = 0;
isMouseover = true;


public data :any;


  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    public firestore: AngularFirestore
  ) {

    this.psicologo = firestore.collection('psicologo' , ref => ref.orderBy('nome', 'asc')).valueChanges();
      console.log(this.psicologo);

  }



  ngOnInit() {

    console.log(this.stars);
    console.log(this.selectedValue);

    console.log(this.data);

  }

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
    this.data = this.selectedValue;
    console.log(this.data);
  }

   addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
      console.log(this.selectedValue);

    }
   }

   removeClass() {
     if (this.isMouseover) {
        this.selectedValue = 0;
        console.log(this.selectedValue);
     }
   }


  cadastrar(){
    this.presentAlert();
  }
  async presentAlert() {
    this.firestore.collection('avaliacao').doc().set({
      avaliacao: this.data,
      msg: this.msg

    });
    this.router.navigateByUrl('acompanhamento');
    this.presentToast('Avaliação feita com sucesso.');
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
