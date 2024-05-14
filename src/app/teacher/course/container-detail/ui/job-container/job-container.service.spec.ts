import { TestBed } from '@angular/core/testing';

import { JobContainerService } from './job-container.service';

describe('JobContainerService', () => {
  let service: JobContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
