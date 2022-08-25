
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiKey = environment.Api_Key;
  Scheme = "https://api.unsplash.com"
  constructor(private http: HttpClient) {

  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  getUsplash(): Observable<any[]> {
    return this.http.get<any>
      (`${this.Scheme}/photos/?client_id=${this.apiKey}&per_page=30&orientation=squarish`)
  }


  getPhotosSearch(keyword: string) {
    // return this.http.get(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&orientation=portrait&page=1`);
    return this.http.get
      (`${this.Scheme}/search/photos?query=${keyword}&per_page=30&client_id=${this.apiKey}`);
  }

  getCollection() {
    return this.http.get(`${this.Scheme}/collections?page=1`);

  }


}
