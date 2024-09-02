import { TestBed } from '@angular/core/testing';

import { EditTaskProgressTableService } from './edit-task-progress-table.service';

describe('EditTaskProgressTableService', () => {
  let service: EditTaskProgressTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTaskProgressTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
