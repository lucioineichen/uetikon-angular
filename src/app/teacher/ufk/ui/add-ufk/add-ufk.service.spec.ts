import { TestBed } from '@angular/core/testing';

import { AddUfkService } from './add-ufk.service';

describe('AddUfkService', () => {
  let service: AddUfkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUfkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
