import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs';
import { MessagesService } from '../../../../services/messages/messages.service';
import { PinnedMessagesService } from '../../../../services/messages/pinned-messages/pinned-messages.service';
import { ScreenService } from '../../../../services/screen/screen.service';
import {
  MessageCardItem,
  PinButton,
} from '../../models/message-card.interface';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss',
})
export class MessageCardComponent {
  messagesService = inject(MessagesService);
  pinnedMessagesService = inject(PinnedMessagesService);

  @Input() title?: string;
  @Input() collapsable?: boolean;
  @Input() items: MessageCardItem[] = [];
  @Input() iconSize = 36;

  collapsed = false;

  isMobile = inject(ScreenService).isMobileSignal;

  public onPinClicked(item: MessageCardItem, pin?: PinButton): void {
    if (!pin) {
      return;
    }
    if (pin === 'pin') {
      this.pinMessage(item);
    } else {
      this.unpinMessage(item);
    }
  }

  public pinMessage(item: MessageCardItem): void {
    this.pinnedMessagesService.pinnedMessagesSubject$.pipe(take(1)).subscribe({
      next: (items: MessageCardItem[]) => {
        const pinnedIds = items.map((item) => item.id);
        if (pinnedIds.includes(item.id)) {
          return;
        }
        let tempItem = structuredClone(item);
        tempItem.itemIcon.src =
          tempItem.itemIcon.status === 'error'
            ? 'mail-red-checkmark.png'
            : 'mail-green-checkmark.png';
        if (tempItem.buttons[1]?.pin) {
          tempItem.buttons[1] = { src: 'pinned.png', pin: 'unpin' };
        }
        this.pinnedMessagesService.pinnedMessagesSubject$.next([
          tempItem,
          ...items,
        ]);
      },
    });
  }

  public unpinMessage(item: MessageCardItem): void {
    this.items?.splice(this.items.indexOf(item), 1);
    this.pinnedMessagesService.pinnedMessagesSubject$.next([...this.items]);
  }

  public onToggleCardCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  get limitedItems(): MessageCardItem[] {
    return this.isMobile() && this.title === 'New messages'
      ? this.items.slice(0, 2)
      : this.items;
  }
}
