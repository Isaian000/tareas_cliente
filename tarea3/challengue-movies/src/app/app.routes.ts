import { Routes } from '@angular/router';
import { Favorites } from './pages/favorites/favorites';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { Movies } from './pages/movies/movies';

export const routes: Routes = [
  { path: '', component: Movies },
  { path: 'movies/:id', component: MovieDetail },
  { path: 'favorites', component: Favorites },
  { path: '**', redirectTo: '' },
];
