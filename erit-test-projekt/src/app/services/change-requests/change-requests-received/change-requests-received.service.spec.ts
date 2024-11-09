import { TestBed } from '@angular/core/testing';

import { ChangeRequestsReceivedService } from './change-requests-received.service';

describe('ChangeRequestsReceivedService', () => {
  let service: ChangeRequestsReceivedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeRequestsReceivedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
