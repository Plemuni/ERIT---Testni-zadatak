import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconCardItem } from '../../components/shared/models/icon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messagesSubject$ = new BehaviorSubject<IconCardItem[]>([
    {
      id: 4,
      itemIcon: {
        status: 'error',
        type: 'mail',
      },
      dates: [
        { icon: 'logout', date: '24.09.2024 00:00' },
        { icon: 'login', date: '24.09.2025 00:00' },
      ],
      text: {
        title: 'ACC ROMA',
        content: `Porta lorem mollis aliquam ut porttitor,lacinia quis vel eros donec ac odio tempor orci....`,
      },
      buttons: [{ src: 'response.png' }, { src: 'pin.png', pin: 'pin' }],
    },
    {
      id: 5,
      itemIcon: {
        status: 'success',
        type: 'mail',
      },
      dates: [
        { icon: 'logout', date: '24.09.2024 00:00' },
        { icon: 'login', date: '24.09.2025 00:00' },
      ],
      text: {
        title: 'AIRAC',
        content: `Porta lorem mollis aliquam ut porttitor,lacinia quis vel eros donec ac odio tempor orci....`,
      },
      buttons: [{ src: 'no-response.png' }, { src: 'pin.png', pin: 'pin' }],
    },
    {
      id: 6,
      itemIcon: {
        status: 'success',
        type: 'mail',
      },
      dates: [
        { icon: 'logout', date: '24.09.2024 00:00' },
        { icon: 'login', date: '24.09.2025 00:00' },
      ],
      text: {
        title: 'ACC ROMA',
        content: `Porta lorem mollis aliquam ut porttitor,lacinia quis vel eros donec ac odio tempor orci....`,
      },
      buttons: [{ src: 'no-response.png' }, { src: 'pin.png', pin: 'pin' }],
    },
  ]);
}
