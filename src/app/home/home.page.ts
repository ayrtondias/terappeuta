import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  publicacoes = [
    {
      titulo: 'Minha primeira publicação',
      data: '2023-04-26',
      conteudo: 'Este é o conteúdo da minha primeira publicação.'
    },
    {
      titulo: 'Minha segunda publicação',
      data: '2023-04-25',
      conteudo: 'Este é o conteúdo da minha segunda publicação.'
    },
    {
      titulo: 'Minha terceira publicação',
      data: '2023-04-24',
      conteudo: 'Este é o conteúdo da minha terceira publicação.'
    }
  ];

}
