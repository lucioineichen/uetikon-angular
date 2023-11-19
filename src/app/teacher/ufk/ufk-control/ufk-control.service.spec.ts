import { TestBed } from '@angular/core/testing';

import { UfkControlService } from './ufk-control.service';

describe('UfkControlService', () => {
  let service: UfkControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfkControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
