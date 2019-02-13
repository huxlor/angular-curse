import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contasena'
})
export class ContasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    if ( activar ) {
      // tslint:disable-next-line:no-inferrable-types
      let salida: string = '';
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
      return salida;
    } else {
        return value;
    }

  }

}
