import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconCardItem, PinButton } from '../../models/icon-card.interface';
import { MessagesService } from '../../../../services/messages/messages.service';
import { PinnedMessagesService } from '../../../../services/messages/pinned-messages/pinned-messages.service';
import { Subscription, take } from 'rxjs';
import { ScreenService } from '../../../../services/screen/screen.service';

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

  isMobile: boolean = false;
  private subscription: Subscription = new Subscription();
  private readonly screenService = inject(ScreenService);

  ngOnInit(): void {
    this.subscription = this.screenService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

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

  private unpinMessage(item: IconCardItem): void {
    this.items?.splice(this.items.indexOf(item), 1);
    this.pinnedMessagesService.pinnedMessagesSubject$.next([...this.items]);
  }

  public onToggleCardCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  get limitedItems(): IconCardItem[] {
    return this.isMobile && this.title === 'New messages'
      ? this.items.slice(0, 2)
      : this.items;
  }
}
