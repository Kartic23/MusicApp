import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';
import { Artist } from '../../interfaces/artist';
import { Album } from '../../interfaces/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css',
  providers:[SpotifyService]
})
export class ArtistComponent implements OnInit {
  id: string ;
  artist: Artist;
  albums: Album[];

  constructor(private _spotifyService: SpotifyService,private _route: ActivatedRoute){

  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._spotifyService.searchArtist(this.id).subscribe(
        artist =>{
          console.log(artist)
          this.artist = artist
        }
      )
      this._spotifyService.searchAlbuns(this.id).subscribe(
        albums =>{
          console.log(albums)
          this.albums = albums.items
        }
      )
    }
    );
  }
}
