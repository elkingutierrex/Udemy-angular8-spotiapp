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
      'Authorization': 'Bearer BQAv7uwqb5kJSZzTfJvQrm7J8omxoMbtJ05NtRD3Ht76YHtcX9j0x43hzwRtTQEr8FqG6-s9F6pJPr_ssELZChcUFAABrqUMQ-9LZvhbUlpjyAiCmlDuhRWXgQ-MqqZqfDfGYzMUrFf4zXMVCkCQQAt40fyHEmeWQw'
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
