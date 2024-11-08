import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../shared/button/button.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, ButtonComponent, UserMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() toggleProfileDropdown = new EventEmitter();
  @Output() toggleNotificationDropdown = new EventEmitter();

  isProfileDropdownVisible = false;
  isNotificationDropdownVisible = false;
  isUserMenuVisible = false;
  selectedRole = 'User';

  onToggleProfileDropdown() {
    this.toggleProfileDropdown.emit();
  }

  onToggleNotificationDropdown() {
    this.toggleNotificationDropdown.emit();
  }

  toggleUserMenu() {
    this.isUserMenuVisible = !this.isUserMenuVisible;
    this.isProfileDropdownVisible = false;
    this.isNotificationDropdownVisible = false;
  }

  onRoleSelected(role: string) {
    this.selectedRole = role;
    this.isUserMenuVisible = false;
  }
}
