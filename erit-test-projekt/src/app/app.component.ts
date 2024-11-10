import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationSideMenuComponent } from './components/side-menus/notification-side-menu/notification-side-menu.component';
import { ProfileSideMenuComponent } from './components/side-menus/profile-side-menu/profile-side-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
    FooterComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly elementRef = inject(ElementRef);
  profileSidenavOpened = false;
  notificationSidenavOpened = false;
  userMenuOpened = false;

  @ViewChild('profileSidenav') profileSidenav!: MatSidenav;
  @ViewChild('notificationSidenav') notificationSidenav!: MatSidenav;

  public onProfileSidenavToggle(): void {
    this.notificationSidenavOpened = false;
    this.profileSidenavOpened = !this.profileSidenavOpened;
  }
  public onNotificationSidenavToggle(): void {
    this.profileSidenavOpened = false;
    this.notificationSidenavOpened = !this.notificationSidenavOpened;
  }

  public onUserMenuToggle(): void {
    this.closeAllSidenavs();
    this.userMenuOpened = !this.userMenuOpened;
  }

  private closeAllSidenavs(): void {
    this.profileSidenavOpened = false;
    this.notificationSidenavOpened = false;
    this.userMenuOpened = false;
  }

  isMobile = false;
  isTablet = false;

  ngOnInit(): void {
    this.breakpointObserver
      .observe('(max-width: 1024px)')
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
