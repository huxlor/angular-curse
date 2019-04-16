import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // tslint:disable-next-line:no-inferrable-types
  heroesURL: string = 'https://heroesapp-df348.firebaseio.com/heroes.json';
  // tslint:disable-next-line:no-inferrable-types
  heroeURL: string = 'https://heroesapp-df348.firebaseio.com/heroes/';

  constructor( private http: HttpClient) { }

  nuevoHeroe( heroe: Heroe) {
      // tslint:disable-next-line:prefer-const
      let body = JSON.stringify( heroe );
      // tslint:disable-next-line:prefer-const
      let headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });

      return this.http.post( this.heroesURL, body, { headers })
            .pipe(map( res => {
              console.log(res);
              return res;
          }));

  }

  actualizarHeroe( heroe: Heroe, key$: string) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify( heroe );
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

  // tslint:disable-next-line:prefer-const
  let url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put( url , body, { headers })
          .pipe(map( res => {
            console.log(res);
            return res;
        }));

}

getHeroe( key$: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.get( url)
      .pipe(map( res => {
        return res;
      }));
}

getHeroes() {

  return this.http.get( this.heroesURL )
    .pipe(map( res => {
      return res;
    }));
}

borrarHeroe( key$: string) {
  // tslint:disable-next-line:prefer-const
  let url = `${ this.heroeURL }/${ key$ }.json`;
  return this.http.delete( url )
      .pipe(map( res => res));
}

}
