import { Component } from '@angular/core';


@Component({
  
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css',
})


export class SongsComponent {
  searchStr: string;
  
  constructor(){
    this.searchStr = "";
  }
  
  searchMusic(){
    console.log(this.searchStr);
  }

}
