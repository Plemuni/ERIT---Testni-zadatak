import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconCardItem } from '../../components/shared/models/icon-card.interface';

@Injectable({
  providedIn: 'root',
})
export class WarningsService {
  warningsSubject$ = new BehaviorSubject<IconCardItem[]>([
    {
      itemIcon: {
        status: 'info',
        type: 'check_circle',
      },
      dates: [{ date: '24.09.2024' }],
      text: {
        content: 'Minimum rest time',
      },
      buttons: [],
    },
    {
      itemIcon: {
        status: 'error',
        type: 'error',
      },
      dates: [{ date: '23.09.2024' }],
      text: {
        content: 'Minimum hours',
      },
      buttons: [],
    },
    {
      itemIcon: {
        status: 'error',
        type: 'error',
      },
      dates: [{ date: '19.09.2024' }],
      text: {
        content: 'Check time',
      },
      buttons: [],
    },
    {
      itemIcon: {
        status: 'info',
        type: 'check_circle',
      },
      dates: [{ date: '17.09.2024' }],
      text: {
        content: 'Check time',
      },
      buttons: [],
    },
  ]);
}
