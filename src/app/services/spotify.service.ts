import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo')
  }

  getNewRelases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDZNpP-rIrLSg8dogQTbQgWDEC0Bhb3AslD3CBuvLQN-H55Ee8MC66otFSRD6V9jw2aDj-lskrkw56P3fUSxPGGkU1Fq2fEoe-24MyqmgKjP4hJDH6GifGpROUSdLA49eIK6ejJOtk9Ek33eNsOuGmhPaJtclwOvw'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });
  }
  getArtista( termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDZNpP-rIrLSg8dogQTbQgWDEC0Bhb3AslD3CBuvLQN-H55Ee8MC66otFSRD6V9jw2aDj-lskrkw56P3fUSxPGGkU1Fq2fEoe-24MyqmgKjP4hJDH6GifGpROUSdLA49eIK6ejJOtk9Ek33eNsOuGmhPaJtclwOvw'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers });

  }
}
