// import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiKey = environment.Api_Key;

  constructor(private http: HttpClient) {

  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  getUsplash() {
    return this.http.get(`https://api.unsplash.com/photos/?client_id=${this.apiKey}`)
  }

}
