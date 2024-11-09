import { TestBed } from '@angular/core/testing';

import { ChangeRequestsSentService } from './change-requests-sent.service';

describe('ChangeRequestsSentService', () => {
  let service: ChangeRequestsSentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeRequestsSentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
