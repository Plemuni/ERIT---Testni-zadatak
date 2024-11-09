import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from '../../services/messages/messages.service';
import { PinnedMessagesService } from '../../services/messages/pinned-messages/pinned-messages.service';
import { WarningsService } from '../../services/warnings/warnings.service';
import { IconCardComponent } from '../shared/card/icon-card/icon-card.component';
// import { RosterService } from '../../services/roster/roster.service';
// import { ChangeRequestsSentService } from '../../services/change-requests/change-requests-sent/change-requests-sent.service';
// import { ChangeRequestsReceivedService } from '../../services/change-requests/change-requests-received/change-requests-received.service';
// import { HoursService } from '../../services/hours/hours.service';
import { ChangeRequestsReceivedService } from '../../services/change-requests/change-requests-received/change-requests-received.service';
import { ChangeRequestsSentService } from '../../services/change-requests/change-requests-sent/change-requests-sent.service';
import { HoursService } from '../../services/hours/hours.service';
import { RosterService } from '../../services/roster/roster.service';
import { RosterCardComponent } from '../shared/card/roster-card/roster-card.component';
import { TableCardComponent } from '../shared/card/table-card/table-card.component';
import { MatTableHeaders } from '../shared/models/mat-table-headers.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    IconCardComponent,
    RosterCardComponent,
    TableCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  warningsService = inject(WarningsService);
  messagesService = inject(MessagesService);
  pinnedMessagesService = inject(PinnedMessagesService);
  rosterService = inject(RosterService);
  changeRequestsSentService = inject(ChangeRequestsSentService);
  changeRequestsReceivedService = inject(ChangeRequestsReceivedService);
  hoursService = inject(HoursService);

  tableHeadersChangeRequestsReceived: MatTableHeaders = {
    header1: 'ROSTER',
    header2: 'DATE',
    header3: 'SHIFT',
    header4: 'SENDER',
    header5: 'STATUS',
  };

  tableHeadersChangeRequestsSent: MatTableHeaders = {
    header1: 'ROSTER',
    header2: 'DATE',
    header3: 'SHIFT',
    header4: 'SENT TO',
    header5: 'STATUS',
  };

  tableHeadersHours: MatTableHeaders = {
    header1: 'LICENSE_UNIT',
    header2: 'ROLE',
    header3: 'LAST WORK',
    header4: 'PERIOD',
    header5: 'HOURS',
  };
}
