import { TestBed } from '@angular/core/testing';

import { AuthService} from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('AuthGuard', ['login', 'isAuthenticated', 'verifyAuthentication']);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {provide: AuthService, useValue: loggerSpy}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
