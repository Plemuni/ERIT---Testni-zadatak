import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sideBarItems = [
    { icon: 'folder_open', label: 'Documents' },
    { icon: 'today', label: 'Roster' },
    { icon: 'message', label: 'Messages' },
    { icon: 'access_time', label: 'Hours' },
    { icon: 'verified', label: 'Ratings' },
    { icon: 'school', label: 'Training' },
    { icon: 'running_with_errors', label: 'Warnings' },
  ];
}
