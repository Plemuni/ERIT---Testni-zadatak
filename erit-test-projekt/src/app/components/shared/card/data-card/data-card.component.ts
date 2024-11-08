import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconCardItem, PinButton } from '../../models/icon-card.interface';
import { MessagesService } from '../../../../services/messages/messages.service';
import { PinnedMessagesService } from '../../../../services/messages/pinned-messages/pinned-messages.service';
import { take } from 'rxjs';
import { DataCardItem } from '../../models/data-card.interface';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss',
})
export class DataCardComponent {
  @Input() title?: string;
  @Input() items: DataCardItem[] = [];
}
