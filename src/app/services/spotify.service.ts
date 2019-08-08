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
      'Authorization': 'Bearer BQBhcrqWXS5Yc8fhWWhS0hZglxCuqNYENtskN384FM_whXwSmlSQyWIWafpF0kbh6Z3yOYBgzqOW6jpNYtI'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });

  }
}
