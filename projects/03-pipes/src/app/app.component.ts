import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nombre = 'Sebastian';
  nombreC = 'jesUs sebAstian diaZ cuesTa';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: '140',
      casa: 'Panorama'
    }
  };

  valorDePromesa = new Promise( ( resolve, reject ) => {
      setTimeout( () => resolve('Llego la Información'), 3500);
  });

  fecha = new Date();

  video = 'PDboaDrHGbA';

  activar = true;
}
