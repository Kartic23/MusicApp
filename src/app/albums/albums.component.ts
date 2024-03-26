import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
  providers:[SpotifyService]
})
export class AlbumsComponent implements OnInit{
  id: string ;
  albums: Album;
  
  constructor(private _spotifyService: SpotifyService,private _route: ActivatedRoute){

  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._spotifyService.getAlbum(this.id).subscribe(
        album  =>{
          this.albums = album
          this.albums.tracks = album.tracks.items;
        }
      )
      
    }
    );
  }
}


