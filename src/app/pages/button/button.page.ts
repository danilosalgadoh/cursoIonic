import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  favorito: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.favorito = !this.favorito;
  }


}
