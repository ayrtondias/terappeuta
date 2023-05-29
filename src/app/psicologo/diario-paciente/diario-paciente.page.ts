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
  selector: 'app-diario-paciente',
  templateUrl: './diario-paciente.page.html',
  styleUrls: ['./diario-paciente.page.scss'],
})
export class DiarioPacientePage implements OnInit {
  idUrl: any;
  pacientes: any;
  diarios: any;
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
  ) {
    this.idUrl = this.route.snapshot.params['id'];


    this.diarios = firestore.collection("diario-emocional", ref =>
    ref.orderBy('data', 'desc').orderBy('hora', 'desc')).valueChanges({idField: 'id'});

    this.pacientes = firestore.collection("paciente").valueChanges({idField: 'id'});


  }

  ngOnInit() {
    /*this.firestore.collection('diario-emocional')
    .get()
    .toPromise()
    .then((querySnapshot) => {
      this.diarios = [];
      if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        if (doc.id === this.idUrl) {
          this.diarios.push(doc.data());
        }
      });
    } else {
      console.log('Nenhum documento encontrado.');
    }
      console.log(this.documentos);
    })
    .catch((error) => {
      console.log('Erro ao buscar documentos:', error);
    });*/
  }

  detalhes(id: any) {
    this.navCtrl.navigateForward('/detalhe-diario-paciente/'+ id );
    console.log(id);
  }

  mostrarDetalhes(event: any) { //enviar id para outra tela
    //const page = this.page;
    const page = event.target.value;
    const id = this.idUrl;
    this.navCtrl.navigateForward('/' + page + '/' + id );
    console.log(id);
  }

}
