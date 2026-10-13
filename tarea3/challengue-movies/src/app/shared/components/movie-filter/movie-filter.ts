import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MovieFilters } from '../../models/movie-filters';

@Component({
  selector: 'app-movie-filter',
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './movie-filter.html',
  styleUrl: './movie-filter.scss',
})
export class MovieFilter {
  @Input() genres: string[] = [];
  @Output() filtersChange = new EventEmitter<MovieFilters>();

  private readonly formBuilder = inject(NonNullableFormBuilder);

  readonly form = this.formBuilder.group({
    title: '',
    director: '',
    producer: '',
    genre: '',
    year: this.formBuilder.control<number | null>(null),
  });

  constructor() {
    this.form.valueChanges.subscribe(() => this.filtersChange.emit(this.form.getRawValue()));
  }

  clear(): void {
    this.form.reset();
  }
}
