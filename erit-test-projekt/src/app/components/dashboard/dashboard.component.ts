import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChangeRequestsReceivedService } from '../../services/change-requests/change-requests-received/change-requests-received.service';
import { ChangeRequestsSentService } from '../../services/change-requests/change-requests-sent/change-requests-sent.service';
import { HoursService } from '../../services/hours/hours.service';
import { MessagesService } from '../../services/messages/messages.service';
import { PinnedMessagesService } from '../../services/messages/pinned-messages/pinned-messages.service';
import { RosterService } from '../../services/roster/roster.service';
import { ScreenService } from '../../services/screen/screen.service';
import { WarningsService } from '../../services/warnings/warnings.service';
import { RosterCardComponent } from '../shared/card/roster-card/roster-card.component';
import { TableCardComponent } from '../shared/card/table-card/table-card.component';
import { MatTableHeaders } from '../shared/models/mat-table-headers.interface';
import { WarningsCardComponent } from '../shared/card/warnings-card/warnings-card.component';
import { MessageCardComponent } from '../shared/card/message-card/message-card.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    RosterCardComponent,
    TableCardComponent,
    WarningsCardComponent,
    MessageCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  readonly messagesService = inject(MessagesService);
  readonly warningsService = inject(WarningsService);
  readonly pinnedMessagesService = inject(PinnedMessagesService);
  readonly rosterService = inject(RosterService);
  readonly changeRequestsSentService = inject(ChangeRequestsSentService);
  readonly changeRequestsReceivedService = inject(
    ChangeRequestsReceivedService
  );
  readonly hoursService = inject(HoursService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly screenService = inject(ScreenService);
  private readonly destroyRef$ = inject(DestroyRef);

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

  mobileTableHeadersHours: MatTableHeaders = {
    header1: 'LIC_U',
    header2: 'ROLE',
    header3: 'LAST W.',
    header4: 'PERIOD',
    header5: 'H',
  };

  section = 1;
  isMobile = false;
  isTablet = false;
  isSmallHeightScreen = false;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 600px)',
        '(min-width: 601px) and (max-width: 1024px)',
        '(max-height: 700px)',
        '(max-height: 1000px)',
      ])
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe((result: BreakpointState) => {
        this.isMobile = result.breakpoints['(max-width: 600px)'] ?? false;
        this.isTablet =
          result.breakpoints['(min-width: 601px) and (max-width: 1024px)'] ??
          false;
        this.isSmallHeightScreen =
          (result.breakpoints['(max-height: 1000px)'] &&
            result.breakpoints['(min-width: 601px) and (max-width: 1024px)']) ||
          (result.breakpoints['(max-height: 700px)'] &&
            result.breakpoints['(max-width: 600px)'])
            ? true
            : false;
        this.screenService.setIsMobile(this.isMobile);
        this.screenService.setIsTablet(this.isTablet);

        if (!this.isMobile && !this.isTablet) {
          this.section = 1;
        }
      });
  }

  get maxSection(): number {
    return this.isSmallHeightScreen ? 7 : 2;
  }

  onSwipeLeft() {
    if ((this.isMobile || this.isTablet) && this.section < this.maxSection) {
      this.section++;
    }
  }

  onSwipeRight() {
    if ((this.isMobile || this.isTablet) && this.section > 1) {
      this.section--;
    }
  }
}
