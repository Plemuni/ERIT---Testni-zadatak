import { TestBed } from '@angular/core/testing';

import { PinnedMessagesService } from './pinned-messages.service';

describe('PinnedMessagesService', () => {
  let service: PinnedMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinnedMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
