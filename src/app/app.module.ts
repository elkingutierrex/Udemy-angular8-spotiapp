import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

//services
import { SpotifyService } from './services/spotify.service';

import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    TarjetasComponent,
    LoadingComponent,
    NoimagePipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
