import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  public isMobileSubject$ = new BehaviorSubject<boolean>(false);

  public isTabletSubject$ = new BehaviorSubject<boolean>(false);

  setIsMobile(value: boolean) {
    this.isMobileSubject$.next(value);
  }

  setIsTablet(value: boolean) {
    this.isTabletSubject$.next(value);
  }
}
