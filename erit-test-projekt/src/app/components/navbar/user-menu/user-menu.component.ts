import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  roles = ['User', 'Supervisor', 'Manager', 'Admin', 'Super admin'];

  @Output() roleSelected = new EventEmitter<string>();

  onRoleSelect(role: string) {
    this.roleSelected.emit(role);
  }
}
