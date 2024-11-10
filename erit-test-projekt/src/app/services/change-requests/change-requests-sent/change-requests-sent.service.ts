import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeRequestItem } from '../../../components/shared/models/data-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ChangeRequestsSentService {
  changeRequestsReceived$ = new BehaviorSubject<ChangeRequestItem[]>([
    {
      roster: 'LDZO ACS',
      date: '19.09.24’',
      shiftSwitch: ['N', 'N2'],
      sentTo: 'Petar Perić',
      status: [
        { icon: 'check_circle', status: 'success' },
        { icon: 'check_circle', status: 'success' },
      ],
    },
    {
      roster: 'LDZO ACS',
      date: '23.09.24’',
      shiftSwitch: ['J', 'P'],
      sentTo: 'Marko Marić',
      status: [
        { icon: 'cancel', status: 'error' },
        { icon: 'pending', status: 'info' },
      ],
    },
    {
      roster: 'LDZO ACS',
      date: '24.09.24’',
      shiftSwitch: ['P', 'J'],
      sentTo: 'Tomislav Horvat',
      status: [
        { icon: 'pending', status: 'info' },
        { icon: 'check_circle', status: 'success' },
      ],
    },
  ]);
}
