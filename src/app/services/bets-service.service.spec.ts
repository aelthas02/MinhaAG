import { TestBed } from '@angular/core/testing';

import { BetsServiceService } from './bets-service.service';

describe('BetsServiceService', () => {
  let service: BetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
