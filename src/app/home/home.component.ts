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
  RandomPhotosData: any;
  tag: any;
  searchKeywords = ''; //User search keyword
  SearchPhotosData: any;  //Stores the Search Query by the API
  error_404: any;      //to conditon later set to false to hide 404 error
  controlSearch: any;
  searchControl = new FormControl('');
  isLoading: any = false;
  searchReady: any = false;
  currentPage: any = 0;

  constructor(private photoService: PhotoService,
    private router: Router) { }


  getRandomPhotos() {
    return this.photoService.getUsplash()
      .subscribe(a => {
        this.RandomPhotosData = a;
        console.log(this.RandomPhotosData)
        if (this.RandomPhotosData) {
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
        this.SearchPhotosData = search;
        this.RandomPhotosData = false;
        this.error_404 = false;

        if (this.SearchPhotosData?.results.length >= 1) {
          this.controlSearch = `found  ${this.SearchPhotosData?.results.length} results`;
        } else {
          this.controlSearch = 'sorry no search result for  : ' + this.searchKeywords;
        }
        // console.log('search', this.SearchPhotosData)
      })

    // console.log(this.searchKeywords)
  }

  getCollections() {
    this.photoService.getCollection().subscribe((data) => console.log('collection', data))
  }

  onBtnNext() {
    this.currentPage++;
    this.SearchPhotosData();

    if (this.currentPage === this.SearchPhotosData?.results.length - 1) {
      // this.showBtnNext = false;
    }
  }

  ngOnInit(): void {
    this.getRandomPhotos();
    this.error_404 = true;
  }

}
