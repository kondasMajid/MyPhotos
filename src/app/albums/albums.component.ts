import { PhotoService } from './../shared/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: any;
  Photos: any;
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.albums = this.photoService.getAlbums();

    this.photoService.getUsplash()
      .subscribe(a => {
        this.Photos = a;
        console.log(this.Photos);
      });
  }

}
