import { TestBed } from '@angular/core/testing';

import { StudentParticipantService } from './student-participant.service';

describe('StudentParticipantService', () => {
  let service: StudentParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
