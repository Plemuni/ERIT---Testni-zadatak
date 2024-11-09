import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RosterCardData } from '../../models/roster-card.interface';

@Component({
  selector: 'app-roster-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTableModule],
  templateUrl: './roster-card.component.html',
  styleUrl: './roster-card.component.scss',
})
export class RosterCardComponent {
  @Input() title?: string;
  @Input() items: RosterCardData[] = [];
}
