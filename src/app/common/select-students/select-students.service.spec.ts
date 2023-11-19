import { TestBed } from '@angular/core/testing';

import { SelectStudentsService } from './select-students.service';

describe('SelectStudentsService', () => {
  let service: SelectStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
