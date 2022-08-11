import { PhotoService } from './../shared/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any;
  albumId: any;
  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.albumId = this.route.snapshot.params['albumId'];
    this.photos = this.photoService.getPhotos(this.albumId)
    // console.log('oooo', this.photos);
    // this.photoService.getUsplash()
    //   .subscribe(a => { console.log('all here', a) })
    // console.log('my data', data);
  }

}
