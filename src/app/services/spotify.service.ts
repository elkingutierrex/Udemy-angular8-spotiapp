import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo')
  }

  getQuery( query:string ){

    const url = `https://api.spotify.com/v1/${ query }`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBkz8r712awyaAtKarCm3DTrevaB4QYNxA6u6j3ZhzKtG0IXhvV2GoAOm5-8NyC-elM9lFLd2tH1hh1GEjPMbneXxskaNEd21WuEn1ZDIpqqQcJJbs64r_81o1OVO_K8UQkA19qNNDt33pY3vxuNML1UymQ7TZUGQ'
    })
    return this.http.get(url, { headers });
  }

  getNewRelases(){
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items));
  }
  getArtista( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items ));
  }
}
