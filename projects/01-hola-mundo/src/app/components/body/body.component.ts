import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    frase: any = {
        mensaje: 'Hey! Im learning Angular',
        autor: 'Sebastian Diaz'
    };

    mostrar = true;

    personajes: string[] = ['Sebastian', 'Karine', 'Paula'];
}
