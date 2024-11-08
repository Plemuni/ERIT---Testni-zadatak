import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileSideMenuComponent } from './components/side-menus/profile-side-menu/profile-side-menu.component';
import { NotificationSideMenuComponent } from './components/side-menus/notification-side-menu/notification-side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    MatSidenavModule,
    ProfileSideMenuComponent,
    NotificationSideMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profileSidenavOpened = false;
  notificationSidenavOpened = false;

  public onProfileSidenavToggle(): void {
    this.notificationSidenavOpened = false;
    this.profileSidenavOpened = !this.profileSidenavOpened;
  }
  public onNotificationSidenavToggle(): void {
    this.profileSidenavOpened = false;
    this.notificationSidenavOpened = !this.notificationSidenavOpened;
  }

  public onSidenavClosed(): void {
    this.profileSidenavOpened = false;
    this.notificationSidenavOpened = false;
  }
}
