import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, combineLatest } from 'rxjs';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FirebaseError } from 'firebase/app';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  loading!: HTMLIonLoadingElement;


  psicologo: any;
  pacientes: any;
  idUsuarioLogado: string = '';

  inicio: any;
  fim: any;
  agenda: any;
  public selectedDate: any;
  public psico: any;

  bloqueado: boolean = false;

  hora: any;
  hora1: any;
  hora2: any;
  hora3: any;
  hora4: any;

  tam = 1;
  tam2 = 1;
  tem = 0;
  naoTem = 0;

  disponivel = 0;
  indisponivel = 0;


  searchTerm: string = '';
  searchResults!: Observable<any[]>;

  doutorAgendado: any;

    constructor(
      private router: Router,
      private navCtrl: NavController,
      private alertController: AlertController,
      private toastController: ToastController,
      private loadingCtrl: LoadingController,
      public firestore: AngularFirestore,
      private fireAuth: AngularFireAuth
    ) {



      this.psicologo = firestore.collection('usuario' , ref => ref.orderBy('nome', 'asc')).valueChanges({idField: 'id'});
      console.log(this.psicologo);
      this.pacientes = firestore.collection('paciente').valueChanges({idField: 'id'});

      this.agenda = firestore.collection('agenda', ref => ref.orderBy('inicio', 'asc')).valueChanges();

    }



  ngOnInit() {
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];

    this.psico = '';

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });
  }
  valorMuda(){
    this.disponivel = 0;
          this.tam2 = 0;
          this.indisponivel = 0;
          this.hora = '';
          this.hora1 = '';
          this.hora2 = '';
          this.hora3 = '';
          this.hora4 = '';

    this.firestore.collection('agenda').get(this.psico).subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const agendaItem = doc.data() as any;
        const documentCount = querySnapshot.size;

        if (documentCount >= this.tam){
          if (agendaItem.data == this.selectedDate &&
            agendaItem.idPsico == this.psico){
              if(agendaItem.inicio == "08:00" ){
                this.indisponivel++;
                this.hora1 = "Indisponivel";
                console.log('1',agendaItem.inicio);
              } else
              if(agendaItem.inicio == "09:00"){
                this.indisponivel++;
                this.hora2 = "Indisponivel";
                console.log('2',agendaItem.inicio);
              } else
              if(agendaItem.inicio == "10:00"){
                this.indisponivel++;
                this.hora3 = "Indisponivel";
                console.log('3',agendaItem.inicio);
              } else
              if(agendaItem.inicio == "11:00"){
                this.indisponivel++;
                this.hora4 = "Indisponivel";
                console.log('4',agendaItem.inicio);
              }
            } else {
              this.disponivel++;

            }
            this.tam2++;
          }


        if (documentCount < this.tam2){
          this.disponivel = 0;
          this.tam2 = 0;
          this.indisponivel = 0;
          this.hora = '';
          this.hora1 = '';
          this.hora2 = '';
          this.hora3 = '';
          this.hora4 = '';
        }


      });
    });
  }


  onDateInput(event: any) {
    this.selectedDate =  event.target.value;
  }
  selectPsico(event: any) {
      this.psico = event.target.value;
  }

  selectHora(hora: any) {
    this.tem = 0;
    this.tam = 0;
    this.naoTem = 0;
    console.log("inicio: ", hora);
    if (hora == 1) {
      this.inicio = "08:00";
      this.fim = "09:00";
    }
    if (hora == 2) {
      this.inicio = "09:00";
      this.fim = "10:00";
    }
    if (hora == 3) {
      this.inicio = "10:00";
      this.fim = "11:00";
    }
    if (hora == 4) {
      this.inicio = "11:00";
      this.fim = "12:00";
    }

    this.firestore.collection('agenda').get(this.psico).subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const agendaItem = doc.data() as any;
        const documentCount = querySnapshot.size;
        console.log('Quantidade de documentos recebidos:', documentCount);

        console.log('tamanho',this.tam);

        if(this.psico != null){
          if (documentCount >= this.tam){
            if (agendaItem.data == this.selectedDate &&
              agendaItem.inicio == this.inicio &&
              agendaItem.idPsico == this.psico){
                this.tem++;
                console.log('tem',this.tem);
              } else {
                this.naoTem++;
                console.log('não tem',this.naoTem);
              }
              this.tam++;
          }
          if (this.tem == 1){
            console.log('Horario Indisponivel');
            this.presentToast('Horario Indisponivel');

          } else if(documentCount == this.naoTem &&
            this.tem == 0){
            console.log('cadastrar');
            this.presentAlert(this.inicio, this.fim);
          }
          if (documentCount < this.tam){
            this.tem = 0;
            this.tam = 0;
            this.naoTem = 0;
          }
        } else {
          this.presentToast('Selecione um psicologo');
        }
      });
    });

  }

  async presentAlert(inicio: any, fim: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: inicio + " - " + fim +" do dia "+ this.selectedDate + ' Gostaria de agendar seu horario?',
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
              const uid = this.idUsuarioLogado;
              this.firestore.collection('agenda').doc().set({
                idPaciente: uid,
                idPsico: this.psico,
                inicio: inicio,
                fim: fim,
                data: this.selectedDate,
                status: "Indisponivel"
              });

              this.firestore.collection('horarioBloqueado').doc().set({
                idPsico: this.psico,
                inicio: inicio,
                data: this.selectedDate
              });
              this.presentToast('Agendamento realizado com sucesso.');
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
      duration: 5000,
      position: 'middle'
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
