import { TestBed } from '@angular/core/testing';

import { PlanDateService } from './plan-date.service';

describe('PlanDateService', () => {
  let service: PlanDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
