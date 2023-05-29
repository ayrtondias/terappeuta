import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { identity } from 'rxjs';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-det-psicologo',
  templateUrl: './det-psicologo.page.html',
  styleUrls: ['./det-psicologo.page.scss'],
})
export class DetPsicologoPage implements OnInit {
idUsuarioLogado: string = '';
idPsico: any;
psicologo: any;
estrela = '';
msg: any;
avaliacao: string = '';

stars: number[] = [1, 2, 3, 4, 5];

selectedValue: number = 0;
isMouseover = true;

documentos: any;


public data :any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private fireAuth: AngularFireAuth,
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
    this.idPsico = this.route.snapshot.params['id'];
    console.log(this.idPsico);

    this.psicologo = this.firestore.collection('usuario')
    .get()
    .toPromise()
    .then((querySnapshot) => {
      this.psicologo = [];
      if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        if (doc.id === this.idPsico) {
          this.psicologo.push(doc.data());
        }
      });
    } else {
      console.log('Nenhum documento encontrado.');
    }
      console.log(this.documentos);
    })
    .catch((error) => {
      console.log('Erro ao buscar documentos:', error);
    });

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
      msg: this.msg,
      idPsico: this.idPsico,
      idPaciente: this.idUsuarioLogado
    });
    this.router.navigateByUrl('/acompanhamento').then(() => {
      window.location.reload();
    });
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
