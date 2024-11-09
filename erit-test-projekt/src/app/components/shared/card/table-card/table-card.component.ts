import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {
  ChangeRequestItem,
  WorkTimeItem,
} from '../../models/data-card.interface';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableHeaders } from '../../models/mat-table-headers.interface';

@Component({
  selector: 'app-table-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTableModule],
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.scss',
})
export class TableCardComponent {
  @Input() title?: string;
  @Input() tableHeaders!: MatTableHeaders;
  @Input() items: ChangeRequestItem[] | WorkTimeItem[] = [];

  get displayedColumns(): string[] {
    return Object.values(this.tableHeaders);
  }

  get dataSource(): CdkTableDataSourceInput<ChangeRequestItem | WorkTimeItem> {
    if (this.isChangeRequestItems(this.items)) {
      return this.items;
    } else {
      return this.items;
    }
  }

  // Type guard to check if items is ChangeRequestItem[]
  isChangeRequestItems(
    items: ChangeRequestItem[] | WorkTimeItem[]
  ): items is ChangeRequestItem[] {
    return (
      items.length === 0 || (items[0] as ChangeRequestItem).roster !== undefined
    );
  }
}
