import { TestBed } from '@angular/core/testing';

import { SelectCourseService } from './select-course.service';

describe('SelectCourseService', () => {
  let service: SelectCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
