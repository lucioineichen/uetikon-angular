import { TestBed } from '@angular/core/testing';

import { UfkReflectionTableService } from './ufk-reflection-table.service';

describe('UfkReflectionTableService', () => {
  let service: UfkReflectionTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfkReflectionTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
