import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly items = signal<Movie[]>([]);

  readonly favorites = this.items.asReadonly();

  isFavorite(id: number): boolean {
    return this.items().some((movie) => movie.id === id);
  }

  add(movie: Movie): void {
    if (!this.isFavorite(movie.id)) {
      this.items.update((items) => [...items, movie]);
    }
  }

  remove(id: number): void {
    this.items.update((items) => items.filter((movie) => movie.id !== id));
  }

  toggle(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      this.remove(movie.id);
    } else {
      this.add(movie);
    }
  }
}
