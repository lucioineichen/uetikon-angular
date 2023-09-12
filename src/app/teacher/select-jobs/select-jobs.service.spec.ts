import { TestBed } from '@angular/core/testing';

import { SelectJobsService } from './select-jobs.service';

describe('SelectJobsService', () => {
  let service: SelectJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
