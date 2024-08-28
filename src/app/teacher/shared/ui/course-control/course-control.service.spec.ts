import { TestBed } from '@angular/core/testing';

import { CourseControlService } from './course-control.service';

describe('CourseControlService', () => {
  let service: CourseControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
