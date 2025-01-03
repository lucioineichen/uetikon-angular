import { TestBed } from '@angular/core/testing';

import { ValidateOldPasswordService } from './validate-old-password.service';

describe('ValidateOldPasswordService', () => {
  let service: ValidateOldPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateOldPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
