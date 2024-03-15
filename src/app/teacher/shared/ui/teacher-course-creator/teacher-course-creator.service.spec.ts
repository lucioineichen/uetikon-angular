import { TestBed } from '@angular/core/testing';

import { TeacherCourseCreatorService } from './teacher-course-creator.service';

describe('TeacherCourseCreatorService', () => {
  let service: TeacherCourseCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherCourseCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
