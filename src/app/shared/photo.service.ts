// import { environment } from './../../environments/environment.prod';
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
  Scheme = "https://api.unsplash.coms"
  constructor(private http: HttpClient) {

  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  getUsplash(): Observable<any[]> {
    return this.http.get<any>(`${this.Scheme}/photos/?client_id=${this.apiKey}`)

  }


  getPhotosSearch() {
    // return this.http.get(`https://api.unsplash.com/search/photos?query=fire&per_page=30&orientation=portrait&page=1`);

    // return this.http.get(`https://api.unsplash.com/search/photos?query=fire&per_page=30&orientation=portrait&page=1`);
    // return this.http.get(`${this.Scheme}/search/photos?client_id=${this.apiKey}$query=${keyword}`);
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Server Error")
  // }

}
