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
  gallery: any
  randomPhotosData: any;
  tag: any;
  searchKeywords = ''; //User search keyword
  searchPhotosData: any;  //Stores the Search Query by the API
  error_404: any;      //to conditon later set to false to hide 404 error
  controlSearch: any;
  searchControl = new FormControl('');
  isLoading: any = false;
  searchReady: any = false;

  constructor(private photoService: PhotoService,
    private router: Router) { }


  getRandomPhotos() {
    return this.photoService.getUsplash()
      .subscribe(a => {
        this.randomPhotosData = a;
        if (this.randomPhotosData) {
          this.error_404 = false;
        }
        this.gallery = this.getRandomPhotos;
      });
  }

  getSearchedPhotos() {
    this.isLoading = true;

    this.photoService.getPhotosSearch(this.searchKeywords)
      .subscribe((search: any) => {
        this.searchReady = true;
        this.isLoading = false;
        this.searchPhotosData = search;
        this.randomPhotosData = false;
        this.error_404 = false;

        if (this.searchPhotosData?.results.length >= 1) {
          this.controlSearch = '';
        } else {
          this.controlSearch = 'sorry no search result for  : ' + this.searchKeywords;
        }
        // console.log('search', this.searchPhotosData)
      })

    // console.log(this.searchKeywords)
  }

  getCollections() {
    this.photoService.getCollection().subscribe((data) => console.log('collection', data))
  }

  ngOnInit(): void {
    this.getRandomPhotos();
    this.error_404 = true;
  }

}
