import { TestBed } from '@angular/core/testing';

import { ChooseTeacherDialogService } from './choose-teacher-dialog.service';

describe('ChooseTeacherDialogService', () => {
  let service: ChooseTeacherDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseTeacherDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
