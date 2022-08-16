import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../shared/photo.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums: any;
  randomPhotosData: any;
  tag: any;
  searchKeywords = ''; //User search keyword
  searchPhotosData: any;  //Stores the Search Query by the API
  error_404: any;      //to conditon later set to false to hide 404 error
  searchControl = new FormControl('');
  constructor(private photoService: PhotoService, private router: Router) { }

  // getPhotos() {
  //   this.photoService.getPhotosSearch()
  //     .subscribe((res) => {
  //       console.log('Hello', res)
  //     })
  // }

  getRandomPhotos() {
    return this.photoService.getUsplash()
      .subscribe(a => {
        this.randomPhotosData = a;
        if (this.randomPhotosData) {
          this.error_404 = false;
        }
        console.log('-----', this.randomPhotosData);
      });
  }

  getSearchedPhotos() {
    this.photoService.getPhotosSearch(this.searchKeywords).subscribe((search: any) => {
      this.searchPhotosData = search;
      this.randomPhotosData = false;
      this.error_404 = false;
      console.log('search', this.searchPhotosData)
    })

    console.log(this.searchKeywords)
  }
  ngOnInit(): void {

    // this.albums = this.photoService.getAlbums();

    this.getRandomPhotos();
    this.error_404 = true;
    // this.getPhotos();

    // this.photoService.getPhotosSearch().subscribe((a) => console.log(a))


    // this.tag =  this.Photos;
    // this.tag ? this.Photos.sponsorship.tagline : ""
  }



}
