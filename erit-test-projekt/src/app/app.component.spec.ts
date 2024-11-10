import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationSideMenuComponent } from './components/side-menus/notification-side-menu/notification-side-menu.component';
import { ProfileSideMenuComponent } from './components/side-menus/profile-side-menu/profile-side-menu.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        NavbarComponent,
        SidebarComponent,
        NotificationSideMenuComponent,
        ProfileSideMenuComponent,
        FooterComponent,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: BreakpointObserver,
          useValue: {
            observe: jasmine
              .createSpy('observe')
              .and.returnValue(of({ matches: false })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    breakpointObserver = TestBed.inject(BreakpointObserver);
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle profile sidenav and close other sidenavs', () => {
    component.notificationSidenavOpened = true;
    component.onProfileSidenavToggle();
    expect(component.profileSidenavOpened).toBeTrue();
    expect(component.notificationSidenavOpened).toBeFalse();
  });

  it('should toggle notification sidenav and close other sidenavs', () => {
    component.profileSidenavOpened = true;
    component.onNotificationSidenavToggle();
    expect(component.notificationSidenavOpened).toBeTrue();
    expect(component.profileSidenavOpened).toBeFalse();
  });

  it('should toggle user menu and close all sidenavs', () => {
    component.profileSidenavOpened = true;
    component.notificationSidenavOpened = true;
    component.onUserMenuToggle();
    expect(component.userMenuOpened).toBeTrue();
    expect(component.profileSidenavOpened).toBeFalse();
    expect(component.notificationSidenavOpened).toBeFalse();
  });

  it('should close all sidenavs and user menu', () => {
    component.profileSidenavOpened = true;
    component.notificationSidenavOpened = true;
    component.userMenuOpened = true;
    component.closeAllSidenavs();
    expect(component.profileSidenavOpened).toBeFalse();
    expect(component.notificationSidenavOpened).toBeFalse();
    expect(component.userMenuOpened).toBeFalse();
  });

  it('should set isMobile based on screen width', fakeAsync(() => {
    (breakpointObserver.observe as jasmine.Spy).and.returnValue(
      of({ matches: true })
    );
    component.ngOnInit();
    tick();
    expect(component.isMobile).toBeTrue();
  }));

  it('should render footer only when isMobile is true', () => {
    component.isMobile = true;
    fixture.detectChanges();
    let footer = fixture.debugElement.query(By.css('app-footer'));
    expect(footer).toBeTruthy();

    component.isMobile = false;
    fixture.detectChanges();
    footer = fixture.debugElement.query(By.css('app-footer'));
    expect(footer).toBeNull();
  });
});
