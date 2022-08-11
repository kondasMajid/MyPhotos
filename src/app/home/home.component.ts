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
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.albums = this.photoService.getAlbums();

    this.photoService.getUsplash()
      .subscribe(a => {
        this.Photos = a;
        console.log(this.Photos);
      });

    // this.tag =  this.Photos;
    // this.tag ? this.Photos.sponsorship.tagline : ""
  }



}
