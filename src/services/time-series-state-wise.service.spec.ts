import { TestBed } from '@angular/core/testing';

import { TimeSeriesStateWiseService } from './time-series-state-wise.service';

describe('TimeSeriesStateWiseService', () => {
  let service: TimeSeriesStateWiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSeriesStateWiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
