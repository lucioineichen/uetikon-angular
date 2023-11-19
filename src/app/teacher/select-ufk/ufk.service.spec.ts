import { TestBed } from '@angular/core/testing';

import { UfkService } from './ufk.service';

describe('UfkService', () => {
  let service: UfkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
