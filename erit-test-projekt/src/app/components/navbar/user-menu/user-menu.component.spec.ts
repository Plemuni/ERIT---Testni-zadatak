import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserMenuComponent } from './user-menu.component';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of roles', () => {
    const roleElements = fixture.debugElement.queryAll(By.css('.menu-item'));
    expect(roleElements.length).toBe(component.roles.length);

    roleElements.forEach((element, index) => {
      expect(element.nativeElement.textContent.trim()).toBe(
        component.roles[index]
      );
    });
  });

  it('should emit roleSelected event with correct role when a role is clicked', () => {
    spyOn(component.roleSelected, 'emit');

    const roleElements = fixture.debugElement.queryAll(By.css('.menu-item'));
    const selectedRole = component.roles[1];
    roleElements[1].nativeElement.click();

    expect(component.roleSelected.emit).toHaveBeenCalledWith(selectedRole);
  });
});
