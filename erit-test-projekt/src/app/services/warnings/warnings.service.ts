import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WarningsCardItem } from '../../components/shared/models/warnings-card.interface';

@Injectable({
  providedIn: 'root',
})
export class WarningsService {
  warningsSubject$ = new BehaviorSubject<WarningsCardItem[]>([
    {
      itemIcon: {
        status: 'info',
        type: 'check_circle',
      },
      date: '24.09.2024',
      text: 'Minimum rest time',
    },
    {
      itemIcon: {
        status: 'error',
        type: 'error',
      },
      date: '23.09.2024',
      text: 'Minimum hours',
    },
    {
      itemIcon: {
        status: 'error',
        type: 'error',
      },
      date: '19.09.2024',
      text: 'Check time',
    },
    {
      itemIcon: {
        status: 'info',
        type: 'check_circle',
      },
      date: '17.09.2024',
      text: 'Check time',
    },
  ]);
}
