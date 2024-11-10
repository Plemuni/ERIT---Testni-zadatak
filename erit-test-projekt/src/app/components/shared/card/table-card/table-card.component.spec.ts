import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableCardComponent } from './table-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HoursService } from '../../../../services/hours/hours.service';
import { ChangeRequestsReceivedService } from '../../../../services/change-requests/change-requests-received/change-requests-received.service';
import { ChangeRequestsSentService } from '../../../../services/change-requests/change-requests-sent/change-requests-sent.service';
import { ScreenService } from '../../../../services/screen/screen.service';
import { BehaviorSubject } from 'rxjs';
import {
  ChangeRequestItem,
  WorkTimeItem,
} from '../../models/data-card.interface';
import { MatTableHeaders } from '../../models/mat-table-headers.interface';

describe('TableCardComponent', () => {
  let component: TableCardComponent;
  let fixture: ComponentFixture<TableCardComponent>;

  let mockHoursService: Partial<HoursService>;
  let mockChangeRequestsReceivedService: Partial<ChangeRequestsReceivedService>;
  let mockChangeRequestsSentService: Partial<ChangeRequestsSentService>;
  let mockScreenService: Partial<ScreenService>;

  beforeEach(async () => {
    mockHoursService = {
      changeRequestsReceived$: new BehaviorSubject<WorkTimeItem[]>([
        {
          licenseUnit: 'ACS_LDZO',
          role: 'ACC',
          lastWork: { accent: 'danger', data: '14.09.2024' },
          period: '02.09. - 01.12.',
          hours: { accent: 'danger', data: '27:32' },
        },
      ]),
    };

    mockChangeRequestsReceivedService = {
      changeRequestsReceived$: new BehaviorSubject<ChangeRequestItem[]>([
        {
          roster: 'LDZO ACS',
          date: '19.09.24',
          shiftSwitch: ['N', 'N2'],
          sender: 'Petar Perić',
          status: [
            { status: 'info', icon: 'pending' },
            { status: 'info', icon: 'pending' },
          ],
        },
      ]),
    };

    mockChangeRequestsSentService = {
      changeRequestsReceived$: new BehaviorSubject<ChangeRequestItem[]>([
        {
          roster: 'LDZO ACS',
          date: '19.09.24',
          shiftSwitch: ['N', 'N2'],
          sentTo: 'Marko Marić',
          status: [
            { icon: 'check_circle', status: 'success' },
            { icon: 'pending', status: 'info' },
          ],
        },
      ]),
    };

    mockScreenService = {
      isMobileSubject$: new BehaviorSubject(false),
    };

    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatTableModule,
        TableCardComponent,
      ],
      providers: [
        { provide: HoursService, useValue: mockHoursService },
        {
          provide: ChangeRequestsReceivedService,
          useValue: mockChangeRequestsReceivedService,
        },
        {
          provide: ChangeRequestsSentService,
          useValue: mockChangeRequestsSentService,
        },
        { provide: ScreenService, useValue: mockScreenService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCardComponent);
    component = fixture.componentInstance;
    component.tableHeaders = {
      header1: 'Roster/License Unit',
      header2: 'Date/Role',
      header3: 'Shift/Last Work',
      header4: 'Sender/Period',
      header5: 'Status/Hours',
    };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle collapse state on icon click', () => {
    component.collapsed = false;
    component.onToggleCardCollapse();
    expect(component.collapsed).toBeTrue();
    component.onToggleCardCollapse();
    expect(component.collapsed).toBeFalse();
  });

  it('should format sender name correctly for mobile view', () => {
    component.isMobile = true;
    const senderName = 'Petar Perić';
    expect(component.getSenderDisplayName(senderName)).toEqual('PP');
  });
});
