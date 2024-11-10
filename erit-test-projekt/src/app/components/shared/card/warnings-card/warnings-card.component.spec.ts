import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WarningsCardComponent } from './warnings-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { WarningsCardItem } from '../../models/warnings-card.interface';

describe('WarningsCardComponent', () => {
  let component: WarningsCardComponent;
  let fixture: ComponentFixture<WarningsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleText = 'Warnings';
    component.title = titleText;
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(
      By.css('.card-header h2')
    ).nativeElement;
    expect(titleElement.textContent).toContain(titleText);
  });

  it('should display "No messages." when items array is empty', () => {
    component.items = [];
    fixture.detectChanges();
    const noMessagesElement = fixture.debugElement.query(By.css('b'));
    expect(noMessagesElement).toBeTruthy();
    expect(noMessagesElement.nativeElement.textContent).toContain(
      'No messages.'
    );
  });

  it('should display a list of items', () => {
    const items: WarningsCardItem[] = [
      {
        itemIcon: { type: 'mail', status: 'success' },
        date: '2024-01-01',
        text: 'Message 1',
      },
      {
        itemIcon: { type: 'info', status: 'info' },
        date: '2024-01-02',
        text: 'Message 2',
      },
    ];
    component.items = items;
    fixture.detectChanges();

    const itemElements = fixture.debugElement.queryAll(By.css('.item'));
    expect(itemElements.length).toBe(items.length);

    itemElements.forEach((itemElement, index) => {
      const item = items[index];
      const iconElement = itemElement.query(By.css('.mail-icon')).nativeElement;
      const dateElement = itemElement.query(By.css('.date-text')).nativeElement;
      const messageTextElement = itemElement.query(
        By.css('.message-text')
      ).nativeElement;

      expect(iconElement.textContent.trim()).toBe(item.itemIcon.type);
      expect(dateElement.textContent.trim()).toBe(item.date);
      expect(messageTextElement.textContent.trim()).toBe(item.text);
    });
  });

  it('should apply correct icon classes based on status', () => {
    const items: WarningsCardItem[] = [
      {
        itemIcon: { type: 'mail', status: 'success' },
        date: '2024-01-01',
        text: 'Message 1',
      },
      {
        itemIcon: { type: 'info', status: 'info' },
        date: '2024-01-02',
        text: 'Message 2',
      },
      {
        itemIcon: { type: 'error', status: 'error' },
        date: '2024-01-03',
        text: 'Message 3',
      },
    ];
    component.items = items;
    fixture.detectChanges();

    const itemElements = fixture.debugElement.queryAll(By.css('.mail-icon'));

    expect(itemElements[0].classes['success-icon']).toBeTrue();
    expect(itemElements[1].classes['info-icon']).toBeTrue();
    expect(itemElements[2].classes['error-icon']).toBeTrue();
  });
});
