import { TestBed } from '@angular/core/testing';

import { ChooseTeacherService } from './choose-teacher.service';

describe('ChooseTeacherService', () => {
  let service: ChooseTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
