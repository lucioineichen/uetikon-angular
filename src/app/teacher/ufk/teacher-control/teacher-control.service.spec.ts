import { TestBed } from '@angular/core/testing';

import { TeacherControlService } from './teacher-control.service';

describe('TeacherControlService', () => {
  let service: TeacherControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
