import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
  isMobile = this.screenService.isMobileSignal;
  isTablet = this.screenService.isTabletSignal;

  get filteredSideBarItems() {
    return this.isMobile() || this.isTablet()
      ? this.sideBarItems.slice(0, -1)
      : this.sideBarItems;
  }
}
