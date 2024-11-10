import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$ = this.isMobileSubject.asObservable();

  private isTabletSubject = new BehaviorSubject<boolean>(false);
  isTablet$ = this.isTabletSubject.asObservable();

  setIsMobile(value: boolean) {
    this.isMobileSubject.next(value);
  }

  setIsTablet(value: boolean) {
    this.isTabletSubject.next(value);
  }
}
