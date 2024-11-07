import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface MenuItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-profile-side-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './profile-side-menu.component.html',
  styleUrl: './profile-side-menu.component.scss',
})
export class ProfileSideMenuComponent {
  menuItems: MenuItem[] = [
    { icon: 'person', label: 'Personal info' },
    { icon: 'folder_open', label: 'Personal files' },
    { icon: 'settings', label: 'Profile settings' },
    { icon: 'logout', label: 'Logout' },
  ];
}
