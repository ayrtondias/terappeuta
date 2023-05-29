import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras  } from '@angular/router';
import { formatDistanceToNow, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.page.html',
  styleUrls: ['./acompanhamento.page.scss'],
})
export class AcompanhamentoPage implements OnInit {
  psicologo: any;
  pacientes: any;
  idUsuarioLogado: string = '';

  horario: any;

  searchTerm: string = '';
  searchResults!: Observable<any[]>;

    constructor(
      private router: Router,
      private navCtrl: NavController,
      public firestore: AngularFirestore,
      private fireAuth: AngularFireAuth
    ) {

      this.psicologo = firestore.collection('usuario' , ref => ref.orderBy('nome', 'asc')).valueChanges({idField: 'id'});
      console.log(this.psicologo);
      this.pacientes = firestore.collection('paciente').valueChanges({idField: 'id'})

     }

     search(searchTerm: string) {
      if (searchTerm.trim() === '') {
        this.searchResults = this.psicologo.toLowerCase(); // Limpar os resultados de pesquisa se a barra de pesquisa estiver vazia
      } else {

      const nomeResults = this.firestore.collection('consulta', (ref) =>
        ref.where('nome', '>=', this.searchTerm)
        .where('nome', '<=', this.searchTerm + '\uf8ff')
      ).valueChanges();

      const cpfResults = this.firestore.collection('paciente', (ref) =>
        ref.where('cpf', '>=', this.searchTerm)
        .where('cpf', '<=', this.searchTerm + '\uf8ff')
      ).valueChanges();

      this.searchResults = combineLatest([nomeResults, cpfResults]).pipe(
        map(([nomeResults, cpfResults]) => {
          // Combina os resultados e remove duplicatas
          const combinedResults = [...nomeResults, ...cpfResults];
          return Array.from(new Set(combinedResults));
        })
      );
    }
    }

  ngOnInit() {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      } else {
        console.log("erro")
      }
    });
  }

  mostrarDetalhes(id: any) {
    this.navCtrl.navigateForward('/det-psicologo/'+ id );
    console.log(id);
  }

}
