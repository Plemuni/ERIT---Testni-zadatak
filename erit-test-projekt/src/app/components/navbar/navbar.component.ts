import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProfileSideMenuComponent } from '../side-menus/profile-side-menu/profile-side-menu.component';
import { NotificationSideMenuComponent } from '../side-menus/notification-side-menu/notification-side-menu.component';
import { ButtonComponent } from '../shared/button/button.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ProfileSideMenuComponent,
    NotificationSideMenuComponent,
    ButtonComponent,
    UserMenuComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isProfileDropdownVisible = false;
  isNotificationDropdownVisible = false;
  isUserMenuVisible = false;
  selectedRole = 'User';

  toggleProfileDropdown() {
    this.isProfileDropdownVisible = !this.isProfileDropdownVisible;
    this.isNotificationDropdownVisible = false;
    this.isUserMenuVisible = false;
  }

  toggleNotificationDropdown() {
    this.isNotificationDropdownVisible = !this.isNotificationDropdownVisible;
    this.isProfileDropdownVisible = false;
    this.isUserMenuVisible = false;
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
