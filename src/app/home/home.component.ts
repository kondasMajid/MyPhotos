import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../shared/photo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums: any;
  Photos: any;
  tag: any;
  searchKeywords = ''; //User search keyword
  searcData: any;  //Stores the Search Query by the API
  searchControl = new FormControl('');
  constructor(private photoService: PhotoService) { }

  // getPhotos() {
  //   this.photoService.getPhotosSearch()
  //     .subscribe((res) => {
  //       console.log('Hello', res)
  //     })
  // }

  getRandom() {
    return this.photoService.getUsplash()
      .subscribe(a => {
        this.Photos = a;
        console.log('-----', this.Photos);
      });
  }

  searchPhotos() {
    this.photoService.getPhotosSearch(this.searchKeywords).subscribe((search: any) => {
      this.searcData = search;
      console.log('search', search)
    })

    console.log(this.searchKeywords)
  }
  ngOnInit(): void {

    // this.albums = this.photoService.getAlbums();

    this.getRandom();
    // this.getPhotos();

    // this.photoService.getPhotosSearch().subscribe((a) => console.log(a))


    // this.tag =  this.Photos;
    // this.tag ? this.Photos.sponsorship.tagline : ""
  }



}
