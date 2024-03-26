import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  {path: '',  component: SongsComponent, pathMatch: 'full'},
  {path: 'artist/:id',  component: ArtistComponent},
  {path: 'album/:id',  component: AlbumsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
