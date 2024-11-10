import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {
  ChangeRequestItem,
  WorkTimeItem,
} from '../../models/data-card.interface';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableHeaders } from '../../models/mat-table-headers.interface';
import { ScreenService } from '../../../../services/screen/screen.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  isMobile: boolean = false;
  private readonly screenService = inject(ScreenService);
  collapsed = false;
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.screenService.isMobileSubject$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }

  get displayedColumns(): string[] {
    return Object.values(this.tableHeaders);
  }

  get dataSource(): CdkTableDataSourceInput<ChangeRequestItem | WorkTimeItem> {
    if (this.isChangeRequestItems(this.items)) {
      return this.items;
    } else {
      return this.isMobile
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
    return this.isMobile
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
