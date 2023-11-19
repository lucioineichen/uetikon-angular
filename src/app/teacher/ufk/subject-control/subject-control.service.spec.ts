import { TestBed } from '@angular/core/testing';

import { SubjectControlService } from './subject-control.service';

describe('SubjectControlService', () => {
  let service: SubjectControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
