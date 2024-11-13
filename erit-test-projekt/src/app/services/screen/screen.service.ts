import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  // Signals for responsive states
  public isMobileSignal = signal(false);
  public isTabletSignal = signal(false);
  public isSmallHeightScreenSignal = signal(false);

  // Methods to update the signals
  setIsMobile(value: boolean) {
    this.isMobileSignal.set(value);
  }

  setIsTablet(value: boolean) {
    this.isTabletSignal.set(value);
  }

  setIsSmallHeightScreen(value: boolean) {
    this.isSmallHeightScreenSignal.set(value);
  }
}
