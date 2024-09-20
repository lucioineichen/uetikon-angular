import { TestBed } from '@angular/core/testing';

import { AddSubmissionService } from './add-submission.service';

describe('AddSubmissionService', () => {
  let service: AddSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
