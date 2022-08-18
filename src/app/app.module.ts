import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { TestpageComponent } from './testpage/testpage.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './inc/error/error.component';
// import { HammerJs } from 'hammerjs'
// import { Mousetrap } from 'mousetrap' 

import { HammerModule } from "../../node_modules/@angular/platform-browser";
import { GalleryModule } from '@ks89/angular-modal-gallery';
@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    HomeComponent,
    TestpageComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GalleryModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
