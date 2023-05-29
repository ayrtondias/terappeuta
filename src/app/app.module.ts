import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule  } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { HomePage } from './psicologo/home/home.page';
import { CadpacientesPage } from './psicologo/cadpacientes/cadpacientes.page';
import { HomePacientePage } from './paciente/home-paciente/home-paciente.page';

import { LOCALE_ID } from '@angular/core';
import localePtBr from '@angular/common/locales/pt';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCn8OkoMisJEIi2gn4Tun7jy2uY1O79g44",
      authDomain: "terappeuta-8bfc0.firebaseapp.com",
      databaseURL: "https://terappeuta-8bfc0-default-rtdb.firebaseio.com",
      projectId: "terappeuta-8bfc0",
      storageBucket: "terappeuta-8bfc0.appspot.com",
      messagingSenderId: "23634304275",
      appId: "1:23634304275:web:bd0437aeeb9e54d4780ee6"
     }),
     RouterModule.forRoot([
      {path: '', redirectTo: 'cadpacientes', pathMatch: 'full'},
      { path: 'cadpacientes', component: CadpacientesPage },

    ])
  ],
  entryComponents: [
    HomePage, HomePacientePage // adicione a nova página aqui
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
