import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListingComponent } from './movie-listing/movie-listing.component';

const routes: Routes = [
{path:'' , component:MovieListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
