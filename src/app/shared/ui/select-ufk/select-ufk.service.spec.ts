import { TestBed } from '@angular/core/testing';

import { SelectUfkService } from './select-ufk.service';

describe('SelectUfkService', () => {
  let service: SelectUfkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectUfkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
