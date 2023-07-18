import { TestBed } from '@angular/core/testing';

import { StudyJobsService } from './study-jobs.service';

describe('StudyJobsService', () => {
  let service: StudyJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
