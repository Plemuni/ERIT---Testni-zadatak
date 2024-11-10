import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { WarningsCardItem } from '../../models/warnings-card.interface';

@Component({
  selector: 'app-warnings-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './warnings-card.component.html',
  styleUrl: './warnings-card.component.scss',
})
export class WarningsCardComponent {
  @Input() items: WarningsCardItem[] = [];
  @Input() title?: string;
}
