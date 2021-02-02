import { Component, OnInit } from '@angular/core';

interface Componente{
  icono: string;
  nombre: string;
  redirect: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icono: 'american-football',
      nombre: 'Action Sheet',
      redirect: '/action-sheet'
    },
    {
      icono: 'alert-circle-outline',
      nombre: 'Alert',
      redirect: '/alert'
    },
    {
      icono: 'beaker-outline',
      nombre: 'Avatar',
      redirect: '/avatar'
    },
    {
      icono: 'radio-button-off-outline',
      nombre: 'Boton',
      redirect: '/button'
    },
    {
      icono: 'card-outline',
      nombre: 'Card',
      redirect: '/card'
    },
    {
      icono: 'checkmark-circle-outline',
      nombre: 'Check box',
      redirect: '/checkbox'
    },
    {
      icono: 'calendar-outline',
      nombre: 'Date Time',
      redirect: '/datetime'
    },
    {
      icono: 'car-outline',
      nombre: 'Fabs',
      redirect: '/fabs'
    }

  ];



  constructor() { }

  ngOnInit() {
  }

}
