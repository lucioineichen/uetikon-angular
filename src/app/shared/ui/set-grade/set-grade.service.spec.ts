import { TestBed } from '@angular/core/testing';

import { SetGradeService } from './set-grade.service';

describe('SetGradeService', () => {
  let service: SetGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
