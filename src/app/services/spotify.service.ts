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
      'Authorization': 'Bearer BQCy4xLC34qdqQC6IGctjCu6oeoEIWJMJJyymaurn2dmPQh0dUEghpQ3EEgxQIAWWeGlLpMd1NesUQjukENwJ2nany7ewvBJNe0pGaM4eIIr-HJG0YzDe47FXcH4ikj-OqPFDWuzWwQqO-ZycZXDg0_Ay3OmB8k8zQ'
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
