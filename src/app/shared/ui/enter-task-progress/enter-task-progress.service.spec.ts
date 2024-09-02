import { TestBed } from '@angular/core/testing';

import { EnterTaskProgressService } from './enter-task-progress.service';

describe('EnterTaskProgressService', () => {
  let service: EnterTaskProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterTaskProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
