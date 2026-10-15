import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interface/user';

@Component({
  selector: 'app-users-table',
  imports: [],
  templateUrl: './users-table.html',
  styleUrl: './users-table.scss',
})
export class UsersTable {
  @Input() users: User[] = [];
  @Input() seleccionado: User | null = null;
  @Output() seleccionar = new EventEmitter<User>();

  onSelect(usuario: User) {
    this.seleccionar.emit(usuario);
  }
}
