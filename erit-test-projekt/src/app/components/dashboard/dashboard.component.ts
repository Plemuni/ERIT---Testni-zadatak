import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from '../../services/messages/messages.service';
import { PinnedMessagesService } from '../../services/messages/pinned-messages/pinned-messages.service';
import { WarningsService } from '../../services/warnings/warnings.service';
import { IconCardComponent } from '../shared/card/icon-card/icon-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, IconCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  warningsService = inject(WarningsService);
  messagesService = inject(MessagesService);
  pinnedMessagesService = inject(PinnedMessagesService);

  roster = [
    { day: 'Sun 15.09.', code: 'J', description: 'Obslana', dayIcon: 'notes' },
    { day: 'Mon 16.09.', code: 'P', description: 'Prilaz', dayIcon: 'notes' },
    { day: 'Tue 17.09.', code: 'N' },
    { day: 'Wed 18.09.', code: 'N2' },
    { day: 'Thu 19.09.', code: 'J', dayIcon: 'school' },
  ];

  changeRequestsReceived = [
    {
      roster: 'LDZO ACS',
      date: '19.09.24’',
      shift: 'N → N2',
      sender: 'Petar Perić',
      status1: 'pending',
      status2: 'pending',
    },
    {
      roster: 'LDZO ACS',
      date: '23.09.24’',
      shift: 'J → P',
      sender: 'Marko Marić',
      status1: 'approved',
      status2: 'approved',
    },
    {
      roster: 'LDZO ACS',
      date: '24.09.24’',
      shift: 'P → J',
      sender: 'Tomislav Horvat',
      status1: 'approved',
      status2: 'denied',
    },
  ];

  changeRequestsSent = [
    {
      roster: 'LDZO ACS',
      date: '19.09.24’',
      shift: 'N → N2',
      sentTo: 'Petar Perić',
      status1: 'approved',
      status2: 'approved',
    },
    {
      roster: 'LDZO ACS',
      date: '23.09.24’',
      shift: 'J → P',
      sentTo: 'Marko Marić',
      status1: 'denied',
      status2: 'pending',
    },
    {
      roster: 'LDZO ACS',
      date: '24.09.24’',
      shift: 'P → J',
      sentTo: 'Tomislav Horvat',
      status1: 'pending',
      status2: 'approved',
    },
  ];

  hours = [
    {
      license_unit: 'ACS_LDZO',
      role: 'ACC',
      last_work: '14.09.2024',
      period: '02.09. - 01.12.',
      hours: '27:32',
      isVeryImportant: true,
    },
    {
      license_unit: 'ACS_LDZO',
      role: 'TMA_ZAG',
      last_work: '17.09.2024',
      period: '05.03. - 04.07.',
      hours: '15:32',
      isImportant: true,
    },
    {
      license_unit: 'ACS_LDZO',
      role: 'TMA_ZAG',
      last_work: '17.09.2024',
      period: '05.03. - 04.07.',
      hours: '15:32',
      isImportant: true,
    },
  ];

  // togglePin(message: any) {
  //   if (message.isPinned) {
  //     message.isPinned = false;
  //     this.pinnedMessages = this.pinnedMessages.filter(
  //       (pinnedMessage) => pinnedMessage !== message
  //     );
  //   } else {
  //     message.isPinned = true;
  //     this.pinnedMessages.unshift(message);
  //     this.newMessages = this.newMessages.filter(
  //       (newMessage) => newMessage !== message
  //     );
  //   }
  // }

  // toggleNewMessagesCardVisibility() {
  //   this.isNewMessagesCardOpen = !this.isNewMessagesCardOpen;
  // }

  // togglePinnedMessagesCardVisibility() {
  //   this.isPinnedMessagesCardOpen = !this.isPinnedMessagesCardOpen;
  // }

  // toggleCardVisibility() {
  //   this.isCardOpen = !this.isCardOpen;
  // }

  // toggleCheckmark(message: any) {
  //   message.isGreenCheckmark = !message.isGreenCheckmark;
  // }
}
