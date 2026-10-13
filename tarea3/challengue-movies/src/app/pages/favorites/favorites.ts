import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  imports: [NgFor, NgIf, RouterLink, MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  private readonly favoritesService = inject(FavoritesService);

  protected readonly movies = this.favoritesService.favorites;

  onFavoriteToggle(movie: Movie): void {
    this.favoritesService.remove(movie.id);
  }
}
