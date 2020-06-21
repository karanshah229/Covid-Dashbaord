import { TestBed } from '@angular/core/testing';

import { StateDistrictWiseService } from './state-district-wise.service';

describe('StateDistrictWiseService', () => {
  let service: StateDistrictWiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateDistrictWiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
