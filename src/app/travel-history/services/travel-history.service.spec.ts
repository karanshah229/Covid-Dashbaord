import { TestBed } from '@angular/core/testing';

import { TravelHistoryService } from './travel-history.service';

describe('TravelHistoryService', () => {
  let service: TravelHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
