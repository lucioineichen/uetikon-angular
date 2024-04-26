import { TestBed } from '@angular/core/testing';

import { SelectSubjectService } from './select-subject.service';

describe('SelectSubjectService', () => {
  let service: SelectSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
