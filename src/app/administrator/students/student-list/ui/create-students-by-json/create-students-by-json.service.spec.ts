import { TestBed } from '@angular/core/testing';

import { CreateStudentsByJsonService } from './create-students-by-json.service';

describe('CreateStudentsByJsonService', () => {
  let service: CreateStudentsByJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateStudentsByJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
