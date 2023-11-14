import { TestBed } from '@angular/core/testing';

import { SelectClassesService } from './select-classes.service';

describe('SelectClassesService', () => {
  let service: SelectClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
