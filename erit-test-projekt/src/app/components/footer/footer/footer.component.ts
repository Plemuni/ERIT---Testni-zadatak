import { Component, DestroyRef, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScreenService } from '../../../services/screen/screen.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly screenService = inject(ScreenService);
  sideBarItems = [
    { icon: 'folder_open', label: 'Documents' },
    { icon: 'today', label: 'Roster' },
    { icon: 'message', label: 'Messages' },
    { icon: 'access_time', label: 'Hours' },
    { icon: 'verified', label: 'Ratings' },
    { icon: 'school', label: 'Training' },
    { icon: 'running_with_errors', label: 'Warnings' },
  ];
  destroyRef = inject(DestroyRef);
  isMobile: boolean = false;
  isTablet: boolean = false;
  ngOnInit(): void {
    this.screenService.isMobileSubject$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
      });

    this.screenService.isTabletSubject$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isTablet) => {
        this.isTablet = isTablet;
      });
  }
  get filteredSideBarItems() {
    return this.isMobile || this.isTablet
      ? this.sideBarItems.slice(0, -1)
      : this.sideBarItems;
  }
}
