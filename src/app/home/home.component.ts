import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../shared/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums: any;
  Photos: any;
  tag: any;
  searchKeyword = 'dog';
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

  ngOnInit(): void {

    // this.albums = this.photoService.getAlbums();

    this.getRandom();
    // this.getPhotos();

    // this.photoService.getPhotosSearch().subscribe((a) => console.log(a))


    // this.tag =  this.Photos;
    // this.tag ? this.Photos.sponsorship.tagline : ""
  }



}
