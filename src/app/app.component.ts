import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { SpotifyService } from '../services/spotify.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClientModule,SpotifyService]
})
export class AppComponent {
  title = 'musicApp';
}
