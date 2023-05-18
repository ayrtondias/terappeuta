import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {

  constructor(public navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
