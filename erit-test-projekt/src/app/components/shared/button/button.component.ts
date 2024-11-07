import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() icon: string | undefined;
  @Input() ariaLabel: string = '';
  @Input() buttonClass: string = '';
  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.buttonClick.emit(event);
  }
}
