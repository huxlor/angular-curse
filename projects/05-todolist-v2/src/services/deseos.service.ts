import { Injectable } from "@angular/core";
import { Lista } from '../models';

@Injectable()

export class DeseosService{
    
    listas: Lista[] = [];

    constructor(){
        const lista1 = new Lista('Mercado');
        const lista2 = new Lista('Workout');

        this.listas.push(lista1,lista2);

        console.log(this.listas);
    }
}
