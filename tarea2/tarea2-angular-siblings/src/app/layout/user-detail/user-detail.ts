import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interface/user';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {
  @Input() seleccionado: User | null = null;
  @Output() limpiar = new EventEmitter<void>();

  onLimpiar() {
    this.limpiar.emit();
  }
}
