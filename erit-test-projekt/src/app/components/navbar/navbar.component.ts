import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScreenService } from '../../services/screen/screen.service';
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
  @Output() toggleUserMenuDropdown = new EventEmitter();
  isProfileDropdownVisible = false;
  isNotificationDropdownVisible = false;
  isUserMenuVisible = false;
  selectedRole = 'User';
  private readonly screenService = inject(ScreenService);
  isMobile = this.screenService.isMobileSignal;

  onToggleProfileDropdown() {
    this.toggleProfileDropdown.emit();
    this.isUserMenuVisible = false;
  }

  onToggleNotificationDropdown() {
    this.toggleNotificationDropdown.emit();
    this.isUserMenuVisible = false;
  }

  toggleUserMenu() {
    this.toggleUserMenuDropdown.emit();
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }

  onRoleSelected(role: string) {
    this.selectedRole = role;
    this.isUserMenuVisible = false;
  }
}
