import { TestBed } from '@angular/core/testing';

import { LoginCavService } from './login-cav.service';

describe('LoginCavService', () => {
  let service: LoginCavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
