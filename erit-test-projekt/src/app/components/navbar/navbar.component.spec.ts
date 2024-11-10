import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../shared/button/button.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ScreenService } from '../../services/screen/screen.service';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    const screenServiceMock = {
      isMobileSubject$: of(false),
    };

    await TestBed.configureTestingModule({
      imports: [MatIconModule, ButtonComponent, UserMenuComponent],
      providers: [{ provide: ScreenService, useValue: screenServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleProfileDropdown event and close user menu when onToggleProfileDropdown is called', () => {
    spyOn(component.toggleProfileDropdown, 'emit');
    component.isUserMenuVisible = true;

    component.onToggleProfileDropdown();

    expect(component.toggleProfileDropdown.emit).toHaveBeenCalled();
    expect(component.isUserMenuVisible).toBeFalse();
  });

  it('should emit toggleNotificationDropdown event and close user menu when onToggleNotificationDropdown is called', () => {
    spyOn(component.toggleNotificationDropdown, 'emit');
    component.isUserMenuVisible = true;

    component.onToggleNotificationDropdown();

    expect(component.toggleNotificationDropdown.emit).toHaveBeenCalled();
    expect(component.isUserMenuVisible).toBeFalse();
  });

  it('should toggle user menu visibility and emit toggleUserMenuDropdown event when toggleUserMenu is called', () => {
    spyOn(component.toggleUserMenuDropdown, 'emit');

    component.toggleUserMenu();

    expect(component.toggleUserMenuDropdown.emit).toHaveBeenCalled();
    expect(component.isUserMenuVisible).toBeTrue();

    component.toggleUserMenu();

    expect(component.isUserMenuVisible).toBeFalse();
  });

  it('should update selectedRole and close user menu when onRoleSelected is called', () => {
    const newRole = 'Admin';
    component.isUserMenuVisible = true;

    component.onRoleSelected(newRole);

    expect(component.selectedRole).toBe(newRole);
    expect(component.isUserMenuVisible).toBeFalse();
  });
});
