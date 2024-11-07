import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Notification {
  icon: string;
  message: string;
  sender: string;
  time: string;
  clicked?: boolean;
}

@Component({
  selector: 'app-notification-side-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './notification-side-menu.component.html',
  styleUrls: ['./notification-side-menu.component.scss'],
})
export class NotificationSideMenuComponent {
  notifications: Notification[] = [
    {
      icon: 'message',
      message: 'Important message',
      sender: 'Tomislav Horvat',
      time: '12:00',
    },
    {
      icon: 'schedule',
      message: 'Changes in hours',
      sender: 'Marko Marić',
      time: '11:57',
    },
    {
      icon: 'message',
      message: 'Important message',
      sender: 'Marko Marić',
      time: '11:54',
    },
  ];

  earlierNotifications: Notification[] = [
    {
      icon: 'message',
      message: 'Good to know message',
      sender: 'Marko Marić',
      time: '12:34 08.09.2024',
    },
    {
      icon: 'schedule',
      message: 'Shift change - Accepted',
      sender: '',
      time: '10:15 07.09.2024',
    },
    {
      icon: 'verified',
      message: 'Rating expires soon',
      sender: '',
      time: '11:48 05.09.2024',
    },
  ];

  markAsClicked(notification: Notification) {
    notification.clicked = true;
  }
}
