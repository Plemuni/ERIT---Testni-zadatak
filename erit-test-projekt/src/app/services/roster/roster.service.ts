import { Injectable } from '@angular/core';
import { RosterCardData } from '../../components/shared/models/roster-card.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RosterService {
  changeRequestsReceived$ = new BehaviorSubject<RosterCardData[]>([
    {
      day: 'Sun 15.09.',
      code: 'J',
      footer: { description: 'Obslana', icon: 'notes' },
    },
    {
      day: 'Mon 16.09.',
      code: 'P',
      footer: { description: 'Prilaz', icon: 'notes' },
    },
    { day: 'Tue 17.09.', code: 'N' },
    { day: 'Wed 18.09.', code: 'N2' },
    { day: 'Thu 19.09.', code: 'J', footer: { icon: 'school' } },
  ]);
}
