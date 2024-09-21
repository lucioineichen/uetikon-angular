import { TestBed } from '@angular/core/testing';

import { JobCorrectionService } from './job-correction.service';

describe('JobCorrectionService', () => {
  let service: JobCorrectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCorrectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
