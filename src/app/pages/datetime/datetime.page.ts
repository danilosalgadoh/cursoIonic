import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento: Date = new Date();

  customYear = [ 2015, 2016, 2020, 2026 ];

  customPickerOptions = {
    buttons: [
      {
        text: 'hola',
        handler: ( event) => {
          console.log(event);
        }
      },
      {
        text: 'mundo',
        handler: () => {
          console.log('log!');
        }
      }
    ]
  };


  constructor() { }

  ngOnInit() {
  }

  cambioFecha( fecha ){
    console.log(fecha);
    console.log( new Date(fecha.detail.value) );

  }


}
