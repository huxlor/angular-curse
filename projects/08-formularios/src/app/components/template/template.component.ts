import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: solid 1px red;
    }
  `]
})
export class TemplateComponent {

  usuario: Usuario = {
    nombre: null,
    apellido: null,
    correo: null
  };

  constructor() { }
  guardar(forma: NgForm) {
    console.log('NgForma', forma);

    console.log('Value', forma.value);
    console.log('Usuario', this.usuario);
  }

}


interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
}
