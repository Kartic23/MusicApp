import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';
import { Artist } from '../../interfaces/artist';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css',
  providers:[SpotifyService],
})



export class SongsComponent implements OnInit{
  searchStr: string;
  searchRes: Artist[];
  
  constructor(private _spotifyService: SpotifyService){
    this.searchStr = "";
  }

  ngOnInit(): void {
    this._spotifyService.getToken().subscribe(
      (response) => {
        this._spotifyService.setToken(response.access_token)
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          console.error('HTTP Error occurred while fetching token:', error.status, error.statusText);
        } else {
          console.error('An error occurred while fetching token:', error.message);
        }
      }
    );
  }

  
  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(
      res => {
        this.searchRes = res.artists.items;
        console.log(res);
        }
    )

  }
}
