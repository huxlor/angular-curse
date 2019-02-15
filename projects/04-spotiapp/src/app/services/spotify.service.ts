import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Listo!');
  }

  getNewReleases() {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQD2C32but8eBE2iVTtsf4Z8IfJ6pNG3SK0LexbO9GDesFNEniojLbiXTkGaP2RnabhR0_L9vnnVHAYEwy0'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
