import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { ScreenService } from '../../../services/screen/screen.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private subscription = new Subscription();
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

  isMobile: boolean = false;
  isTablet: boolean = false;
  ngOnInit(): void {
    this.subscription = this.screenService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });

    this.subscription.add(
      this.screenService.isTablet$.subscribe((isTablet) => {
        this.isTablet = isTablet;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  get filteredSideBarItems() {
    return this.isMobile || this.isTablet
      ? this.sideBarItems.slice(0, -1)
      : this.sideBarItems;
  }
}
