import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconCardItem } from '../../../components/shared/models/icon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class PinnedMessagesService {
  pinnedMessagesSubject$ = new BehaviorSubject<IconCardItem[]>([
    {
      id: 1,
      itemIcon: {
        src: 'mail-green-checkmark.png',
      },
      dates: [
        { icon: 'logout', date: '24.09.2024 00:00' },
        { icon: 'login', date: '24.09.2025 00:00' },
      ],
      text: {
        title: 'ACC ROMA',
        content: `Porta lorem mollis aliquam ut porttitor,lacinia quis vel eros donec ac odio tempor orci....`,
      },
      buttons: [
        { src: 'no-response.png' },
        { src: 'pinned.png', pin: 'unpin' },
      ],
    },
    {
      id: 2,
      itemIcon: {
        src: 'mail-red-checkmark.png',
      },
      dates: [
        { icon: 'logout', date: '24.09.2024 00:00' },
        { icon: 'login', date: '24.09.2025 00:00' },
      ],
      text: {
        title: 'AIRAC',
        content: `Porta lorem mollis aliquam ut porttitor,lacinia quis vel eros donec ac odio tempor orci....`,
      },
      buttons: [{ src: 'response.png' }, { src: 'pinned.png', pin: 'unpin' }],
    },
    {
      id: 3,
      itemIcon: {
        src: 'mail-red-checkmark.png',
      },
      dates: [
        { icon: 'logout', date: '24.09.2024 00:00' },
        { icon: 'login', date: '24.09.2025 00:00' },
      ],
      text: {
        title: 'ACC ROMA',
        content: `Porta lorem mollis aliquam ut porttitor,lacinia quis vel eros donec ac odio tempor orci....`,
      },
      buttons: [{ src: 'response.png' }, { src: 'pinned.png', pin: 'unpin' }],
    },
  ]);
}
