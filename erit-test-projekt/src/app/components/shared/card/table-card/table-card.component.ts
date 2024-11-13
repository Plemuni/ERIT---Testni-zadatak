import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ScreenService } from '../../../../services/screen/screen.service';
import {
  ChangeRequestItem,
  WorkTimeItem,
} from '../../models/data-card.interface';
import { MatTableHeaders } from '../../models/mat-table-headers.interface';

@Component({
  selector: 'app-table-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTableModule],
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.scss',
})
export class TableCardComponent {
  @Input() collapsable?: boolean;
  @Input() title?: string;
  @Input() tableHeaders!: MatTableHeaders;
  @Input() items: ChangeRequestItem[] | WorkTimeItem[] = [];
  private readonly screenService = inject(ScreenService);
  collapsed = false;
  isMobile = this.screenService.isMobileSignal;

  get displayedColumns(): string[] {
    return Object.values(this.tableHeaders);
  }

  get dataSource(): CdkTableDataSourceInput<ChangeRequestItem | WorkTimeItem> {
    if (this.isChangeRequestItems(this.items)) {
      return this.items;
    } else {
      return this.isMobile()
        ? (this.items.slice(0, 2) as WorkTimeItem[])
        : this.items;
    }
  }

  isChangeRequestItems(
    items: ChangeRequestItem[] | WorkTimeItem[]
  ): items is ChangeRequestItem[] {
    return (
      items.length === 0 || (items[0] as ChangeRequestItem).roster !== undefined
    );
  }

  getSenderDisplayName(sender: string | undefined): string {
    if (!sender) return '';
    return this.isMobile()
      ? sender
          .split(' ')
          .map((word) => word.charAt(0))
          .join('')
          .toUpperCase()
      : sender;
  }

  public onToggleCardCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
