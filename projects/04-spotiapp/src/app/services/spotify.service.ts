import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Listo!');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDjY586W1_K_zdU0ugieCon7C5kN15UVO_1dqQ_v0bUFVB5HMmQlShUjdDH9x-XAvWdNW7fk2rffs5PJNc'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
      // const headers = new HttpHeaders({
      //   'Authorization': 'Bearer BQAsI5xL-vAWSQYXcpZbrO1-kCgC79IsJ3My1tmthtQNbxzK5B6FcZGZxK0EX86i4oe2IZDYtgenbywUTeQ'
      // });

      return this.getQuery('browse/new-releases')
                  .pipe( map( data => data['albums'].items));

      // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      //   .pipe( map( data => data['albums'].items));
  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));

    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    //   .pipe( map( data =>  data['artists'].items));
  }

}
