import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent {

  artistas: any[] = [];
  loading=false;

  constructor( private _spotifyService : SpotifyService) { }

  buscar( termino:string ){
    this.loading = true;
    this._spotifyService.getArtistas( termino )
    .subscribe( (data : any) => {
      this.artistas = data;
    })
    this.loading = false;

  }

}
