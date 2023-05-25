import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss'],
})
export class AvaliacaoComponent  implements OnInit {

  @Input() numStars: number = 5;
  @Input() value: number = 4;

  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

stars: string[] = [];

  constructor() { }

  ngAfterViewInit(){
    let tmp = this.value;
    for(let i=0; this.numStars; i++, tmp--){
      if(tmp >=i)
        this.stars.push("star");
      else if(tmp > 0 && tmp < 1)
        this.stars.push("star-half");
      else
        this.stars.push("star-outline");
    }
  }

  starClicked(index: number){
    console.log(index);
    this.value = index + 1;
    this.ionClick.emit(this.value);
  }

  ngOnInit() {}

}
