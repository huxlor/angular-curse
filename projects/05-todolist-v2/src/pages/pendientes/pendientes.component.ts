import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'pages-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage{
 constructor( public deseosService: DeseosService){

 }
    
 listaSeleccionada( lista: Lista){
     console.log(lista);
 }

}