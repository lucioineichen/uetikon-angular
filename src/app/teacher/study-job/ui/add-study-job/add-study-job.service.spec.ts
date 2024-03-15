import { TestBed } from '@angular/core/testing';

import { AddStudyJobService } from './add-study-job.service';

describe('AddStudyJobService', () => {
  let service: AddStudyJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStudyJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
