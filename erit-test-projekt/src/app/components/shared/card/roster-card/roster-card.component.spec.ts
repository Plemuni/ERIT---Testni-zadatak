import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosterCardComponent } from './roster-card.component';
import { ScreenService } from '../../../../services/screen/screen.service';
import { RosterCardData } from '../../models/roster-card.interface';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('RosterCardComponent', () => {
  let component: RosterCardComponent;
  let fixture: ComponentFixture<RosterCardComponent>;

  let mockScreenService: Partial<ScreenService>;

  beforeEach(async () => {
    mockScreenService = {
      isMobileSubject$: new BehaviorSubject(false),
    };

    await TestBed.configureTestingModule({
      imports: [RosterCardComponent],
      providers: [{ provide: ScreenService, useValue: mockScreenService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterCardComponent);
    component = fixture.componentInstance;
    component.title = 'Test Roster';
    component.items = [
      {
        day: 'Sun 15.09.',
        code: 'J',
        footer: { description: 'Obslana', icon: 'notes' },
      },
      {
        day: 'Mon 16.09.',
        code: 'P',
        footer: { description: 'Prilaz', icon: 'notes' },
      },
      { day: 'Tue 17.09.', code: 'N' },
      { day: 'Wed 18.09.', code: 'N2' },
      { day: 'Thu 19.09.', code: 'J', footer: { icon: 'school' } },
    ] as RosterCardData[];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Test Roster');
  });

  it('should display five items in desktop view', () => {
    component.isMobile = false;
    fixture.detectChanges();
    const displayedItems = fixture.debugElement.queryAll(By.css('.day-item'));
    expect(displayedItems.length).toBe(5);
  });

  it('should display three items in mobile view', () => {
    (mockScreenService.isMobileSubject$ as BehaviorSubject<boolean>).next(true);
    fixture.detectChanges();
    const displayedItems = fixture.debugElement.queryAll(By.css('.day-item'));
    expect(displayedItems.length).toBe(3);
  });

  it('should display day, code, and footer content correctly', () => {
    fixture.detectChanges();
    const firstItem = fixture.debugElement.query(By.css('.day-item'));

    const dayElement = firstItem.query(By.css('.roster-day')).nativeElement;
    const codeElement = firstItem.query(By.css('.roster-code')).nativeElement;
    expect(dayElement.textContent).toContain(component.items[0].day);
    expect(codeElement.textContent).toContain(component.items[0].code);

    const footerDescription = firstItem.query(
      By.css('.roster-description')
    ).nativeElement;
    const footerIcon = firstItem.query(By.css('.day-icon')).nativeElement;
    expect(footerDescription.textContent).toContain(
      component.items[0].footer?.description
    );
    expect(footerIcon.textContent).toContain(component.items[0].footer?.icon);
  });
});
