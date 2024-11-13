import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatTableHeaders } from '../../components/shared/models/mat-table-headers.interface';

@Injectable({
  providedIn: 'root',
})
export class TableHeadersService {
  tableHeadersChangeRequestsReceived$ = new BehaviorSubject<MatTableHeaders>({
    header1: 'ROSTER',
    header2: 'DATE',
    header3: 'SHIFT',
    header4: 'SENDER',
    header5: 'STATUS',
  });

  tableHeadersChangeRequestsSent$ = new BehaviorSubject<MatTableHeaders>({
    header1: 'ROSTER',
    header2: 'DATE',
    header3: 'SHIFT',
    header4: 'SENT TO',
    header5: 'STATUS',
  });

  tableHeadersHours$ = new BehaviorSubject<MatTableHeaders>({
    header1: 'LICENSE_UNIT',
    header2: 'ROLE',
    header3: 'LAST WORK',
    header4: 'PERIOD',
    header5: 'HOURS',
  });

  mobileTableHeadersHours$ = new BehaviorSubject<MatTableHeaders>({
    header1: 'LIC_U',
    header2: 'ROLE',
    header3: 'LAST W.',
    header4: 'PERIOD',
    header5: 'H',
  });
}
