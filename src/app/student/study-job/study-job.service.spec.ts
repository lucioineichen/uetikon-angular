import { TestBed } from '@angular/core/testing';

import { StudyJobService } from './study-job.service';

describe('StudyJobService', () => {
  let service: StudyJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
