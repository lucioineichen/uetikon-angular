import { TestBed } from '@angular/core/testing';

import { TaskCorrectionService } from './task-correction.service';

describe('TaskCorrectionService', () => {
  let service: TaskCorrectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCorrectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
