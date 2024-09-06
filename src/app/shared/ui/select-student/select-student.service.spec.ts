import { TestBed } from '@angular/core/testing';

import { SelectStudentService } from './select-student.service';

describe('SelectStudentService', () => {
  let service: SelectStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
