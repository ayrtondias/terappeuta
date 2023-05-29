import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { format } from 'date-fns';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData, KeyValuePipe  } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
registerLocaleData(localePtBr);

@Component({
  selector: 'app-detalhe-diario-paciente',
  templateUrl: './detalhe-diario-paciente.page.html',
  styleUrls: ['./detalhe-diario-paciente.page.scss'],
})
export class DetalheDiarioPacientePage implements OnInit {
  data = new Date();
  dataAtual: any;

  id: any;

  idUrl: any;

  diarios: any;

  documentos: any;

  formattedDate: any;
  formattedTime: any;
  dataFomateDB: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public firestore: AngularFirestore
  ) {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleString();
    this.formattedDate = format(dataAtual, 'dd/MM/yyyy');
    this.dataFomateDB = format(dataAtual, 'yyyy-MM-dd');
    this.formattedTime = format(dataAtual, 'HH:mm');

    const id = this.route.snapshot.params['id'];
        this.diarios = firestore.collection("diario-emocional").doc(id).valueChanges();

        console.log('recebeu: ', this.route.snapshot.params['id']);

  }


  ngOnInit() {
    this.dataAtual = this.data;
    this.idUrl = this.route.snapshot.params['id'];
    console.log(this.idUrl);

    this.diarios = this.firestore.collection('diario-emocional')
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
    });

  }




}
