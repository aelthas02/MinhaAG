import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('AuthGuard', ['canActivate']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {provide: AuthGuard, useValue: loggerSpy}
      ]
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
