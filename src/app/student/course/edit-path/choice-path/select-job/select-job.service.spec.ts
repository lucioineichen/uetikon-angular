import { TestBed } from '@angular/core/testing';

import { SelectJobService } from './select-job.service';

describe('SelectJobService', () => {
  let service: SelectJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
