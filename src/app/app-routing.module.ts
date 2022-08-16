import { TestpageComponent } from './testpage/testpage.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testzzz', component: PhotosComponent },
  {path:'test', component:TestpageComponent},
  { path: 'photos/:albumId', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
