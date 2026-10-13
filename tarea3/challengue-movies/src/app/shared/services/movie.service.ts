import { Injectable } from '@angular/core';
import { MOVIES } from '../data/movies';
import { Movie } from '../models/movie';
import { MovieFilters } from '../models/movie-filters';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private readonly movies: Movie[] = MOVIES;

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  getGenres(): string[] {
    return [...new Set(this.movies.map((movie) => movie.genre))].sort();
  }

  filter(filters: MovieFilters): Movie[] {
    return this.movies.filter(
      (movie) =>
        this.includes(movie.title, filters.title) &&
        this.includes(movie.director, filters.director) &&
        this.includes(movie.producer, filters.producer) &&
        (!filters.genre || movie.genre === filters.genre) &&
        (!filters.year || movie.year === filters.year),
    );
  }

  private includes(value: string, term: string): boolean {
    return value.toLowerCase().includes(term.trim().toLowerCase());
  }
}
