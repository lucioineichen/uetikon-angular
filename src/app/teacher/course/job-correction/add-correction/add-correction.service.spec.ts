import { TestBed } from '@angular/core/testing';

import { AddCorrectionService } from './add-correction.service';

describe('AddCorrectionService', () => {
  let service: AddCorrectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCorrectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
