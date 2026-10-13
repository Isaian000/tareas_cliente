import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly movieService = inject(MovieService);
  protected readonly favoritesService = inject(FavoritesService);

  protected readonly movie = this.movieService.getById(
    Number(this.route.snapshot.paramMap.get('id')),
  );

  onFavoriteToggle(movie: Movie): void {
    this.favoritesService.toggle(movie);
  }
}
