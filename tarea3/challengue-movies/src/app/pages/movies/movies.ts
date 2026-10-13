import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { MovieFilter } from '../../shared/components/movie-filter/movie-filter';
import { Movie } from '../../shared/models/movie';
import { MovieFilters } from '../../shared/models/movie-filters';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-movies',
  imports: [NgFor, NgIf, MovieCard, MovieFilter],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  private readonly movieService = inject(MovieService);
  protected readonly favoritesService = inject(FavoritesService);

  protected readonly genres = this.movieService.getGenres();
  private readonly filters = signal<MovieFilters>({
    title: '',
    director: '',
    producer: '',
    genre: '',
    year: null,
  });
  protected readonly movies = computed(() => this.movieService.filter(this.filters()));

  onFiltersChange(filters: MovieFilters): void {
    this.filters.set(filters);
  }

  onFavoriteToggle(movie: Movie): void {
    this.favoritesService.toggle(movie);
  }
}
