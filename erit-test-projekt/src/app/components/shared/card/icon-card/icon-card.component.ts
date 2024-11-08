import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconCardItem, PinButton } from '../../models/icon-card.interface';
import { MessagesService } from '../../../../services/messages/messages.service';
import { PinnedMessagesService } from '../../../../services/messages/pinned-messages/pinned-messages.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.scss',
})
export class IconCardComponent {
  messagesService = inject(MessagesService);
  pinnedMessagesService = inject(PinnedMessagesService);

  @Input() title?: string;
  @Input() collapsable?: boolean;
  @Input() items: IconCardItem[] = [];
  @Input() iconSize = 36;

  collapsed = false;

  public onPinClicked(item: IconCardItem, pin?: PinButton): void {
    if (!pin) {
      return;
    }
    if (pin === 'pin') {
      this.pinMessage(item);
    } else {
      this.unpinMessage(item);
    }
  }

  private pinMessage(item: IconCardItem): void {
    this.pinnedMessagesService.pinnedMessagesSubject$.pipe(take(1)).subscribe({
      next: (items: IconCardItem[]) => {
        const pinnedIds = items.map((item) => item.id);
        if (pinnedIds.includes(item.id)) {
          return;
        }
        let tempItem = structuredClone(item);
        tempItem.itemIcon.src =
          tempItem.itemIcon.status === 'error'
            ? 'mail-red-checkmark.png'
            : 'mail-green-checkmark.png';
        if (tempItem.buttons[0]?.pin) {
          tempItem.buttons[0] = { src: 'pinned.png', pin: 'unpin' };
        }
        this.pinnedMessagesService.pinnedMessagesSubject$.next([
          tempItem,
          ...items,
        ]);
      },
    });
  }

  private unpinMessage(item: IconCardItem): void {
    console.log(
      'items',
      this.items,
      'item',
      item,
      'index',
      this.items.indexOf(item)
    );
    this.items?.splice(this.items.indexOf(item), 1);
    console.log(this.items);
    this.pinnedMessagesService.pinnedMessagesSubject$.next([...this.items]);
  }

  public onToggleCardCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
