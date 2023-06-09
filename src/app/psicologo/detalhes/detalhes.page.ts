import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { format } from 'date-fns';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData, KeyValuePipe  } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
registerLocaleData(localePtBr);

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  idUrl: any;

  pacientes: any;

  documentos: any;

  page: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.idUrl = this.route.snapshot.params['id'];
    console.log(this.idUrl);

    this.pacientes = this.firestore.collection('paciente')
    .get()
    .toPromise()
    .then((querySnapshot) => {
      this.pacientes = [];
      if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        if (doc.id === this.idUrl) {
          this.pacientes.push(doc.data());
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
  }



  mostrarDetalhes(event: any) { //enviar id para outra tela
    //const page = this.page;
    const page = event.target.value;
    const id = this.idUrl;
    this.navCtrl.navigateForward('/' + page + '/' + id );
    console.log(id);
  }


}
