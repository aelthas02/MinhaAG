import { TestBed } from '@angular/core/testing';

import { BetsService } from './bets.service';

describe('BetsService', () => {
  let service: BetsService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('BetsService', ['getBets']);
    TestBed.configureTestingModule({
      providers: [
        BetsService,
        {provide: BetsService, useValue: loggerSpy}
      ]
    });
    service = TestBed.inject(BetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
