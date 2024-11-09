import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkTimeItem } from '../../components/shared/models/data-card.interface';

@Injectable({
  providedIn: 'root',
})
export class HoursService {
  changeRequestsReceived$ = new BehaviorSubject<WorkTimeItem[]>([
    {
      licenseUnit: 'ACS_LDZO',
      role: 'ACC',
      lastWork: { accent: 'danger', data: '14.09.2024' },
      period: '02.09. - 01.12.',
      hours: { accent: 'danger', data: '27:32' },
    },
    {
      licenseUnit: 'ACS_LDZO',
      role: 'TMA_ZAG',
      lastWork: { accent: 'warning', data: '17.09.2024' },
      period: '05.03. - 04.07.',
      hours: { data: '15:32' },
    },
    {
      licenseUnit: 'ACS_LDZO',
      role: 'TMA_ZAG',
      lastWork: { accent: 'warning', data: '17.09.2024' },
      period: '05.03. - 04.07.',
      hours: { data: '15:32' },
    },
  ]);
}
