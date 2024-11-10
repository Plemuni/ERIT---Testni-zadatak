import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RosterCardData } from '../../models/roster-card.interface';
import { Subscription } from 'rxjs';
import { ScreenService } from '../../../../services/screen/screen.service';

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
  isMobile: boolean = false;
  private subscription: Subscription = new Subscription();
  private readonly screenService = inject(ScreenService);

  ngOnInit(): void {
    this.subscription = this.screenService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  get displayedItems(): any[] {
    return this.isMobile ? this.items.slice(0, 3) : this.items.slice(0, 5);
  }
}
