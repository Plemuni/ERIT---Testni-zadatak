import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeRequestItem } from '../../../components/shared/models/data-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ChangeRequestsReceivedService {
  changeRequestsReceived$ = new BehaviorSubject<ChangeRequestItem[]>([
    {
      roster: 'LDZO ACS',
      date: '19.09.24’',
      shiftSwitch: ['N', 'N2'],
      sender: 'Petar Perić',
      status: [
        { status: 'info', icon: 'pending' },
        { status: 'info', icon: 'pending' },
      ],
    },
    {
      roster: 'LDZO ACS',
      date: '23.09.24’',
      shiftSwitch: ['J', 'P'],
      sender: 'Marko Marić',
      status: [
        { status: 'info', icon: 'check_circle' },
        { status: 'info', icon: 'pending' },
      ],
    },
    {
      roster: 'LDZO ACS',
      date: '24.09.24’',
      shiftSwitch: ['P', 'J'],
      sender: 'Tomislav Horvat',
      status: [
        { status: 'info', icon: 'check_circle' },
        { status: 'error', icon: 'cancel' },
      ],
    },
  ]);
}
