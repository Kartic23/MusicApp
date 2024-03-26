import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private artistUrl: string;
    private albunsUrl: string;
    private albumUrl: string;
    
    private client_id = 'd38ac1b15aeb4255a6560249edcbe612';
    private client_secret = '97224b7af80a4ab3b89ae3ec845b4b4f';
    private accessToken = 'BQBm2lX7TkB4jT2ezwUbz2YvfT8IiS6N4lc1FDbDq6Zd6M8kj0G8tvZcal4YzyBYA-D0W7y_wqcFRvX_5AyZaQx2SWCjZTT01WaITf95bbipb-asRy0';
    private authUrl = 'https://accounts.spotify.com/api/token';

    

    constructor(private http: HttpClient) {
        this.searchUrl = '';
    }


    getToken(){
        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(this.client_id + ':' + this.client_secret)
          });
      
          const body = new HttpParams()
            .set('grant_type', 'client_credentials');
      
          return this.http.post<any>(this.authUrl, body, { headers: headers });
    }

    setToken(token: any){
        this.accessToken = token
    }

    searchMusic(str: string ,type='artist'){
    
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.accessToken}`
        });

        const params = {
            q: str,
            offset: '0',
            limit: '20',
            type: type,
            market: 'PT'
        };
        this.searchUrl = 'https://api.spotify.com/v1/search';

        return this.http.get(this.searchUrl,{headers,params}).pipe(
            map((response:any) => {
                return response;
            })
        );
    }


    
    searchArtist(id: string ){
    
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.accessToken}`
        });
        this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;

        return this.http.get(this.artistUrl,{headers}).pipe(
            map((response:any) => {
                console.log(response);
                return response;
            })
        );
    }


    searchAlbuns(artistId: string ){
    
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.accessToken}`
        });
        this.albunsUrl = `https://api.spotify.com/v1/artists/${artistId}`+ `/albums`;

        return this.http.get(this.albunsUrl,{headers}).pipe(
            map((response:any) => {
                console.log(response);
                return response;
            })
        );
    }


    getAlbum(id: string ){
    
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.accessToken}`
        });
        this.albumUrl = `https://api.spotify.com/v1/albums/${id}`;

        return this.http.get(this.albumUrl,{headers}).pipe(
            map((response:any) => {
                console.log(response);
                return response;
            })
        );
    }
  
}