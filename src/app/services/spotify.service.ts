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
      'Authorization': 'Bearer BQCVa_hS322DYTw193yaXfmZvkMxshtyt6Wq13ksIVAn0nfp53CkK6qUir3hm9vjD42p3WItqq8eLRudOnsSTVYqw_JREaWWRMifoZ95v3MIE_9lC7ta8RVmeNCANUyOnX_rZVpU5d6KmI8dys7iS-Mb6EmIr3cuqw'
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
