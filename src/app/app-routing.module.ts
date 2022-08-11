import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'photos/:albumId', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
