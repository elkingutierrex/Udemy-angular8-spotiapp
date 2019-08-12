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
      'Authorization': 'Bearer BQCHOMjNNpQTyDlNgpJ6E9TviptcQQK-5u4bzTvmuOQGZV3HVy7MkKZzvL2dCQtaonpecc8UMQGrf7NUTsIy31qdNVQG4E9Wx8kVIuAqa9G06C5g9G37i3Cre8rPHGuaO2eaO5MyQfli3CzUnfh_DIL94Rct0xgW-Q'
    })
    return this.http.get(url, { headers });
  }

  getNewRelases(){
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items));
  }

  getArtistas( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items ));
  }

  getArtista( id: string ){
    return this.getQuery(`artists/${ id }`)
            //.pipe( map( data => data['artists'].items ));
  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
            .pipe( map( data => data['tracks'] ));
  }
}
