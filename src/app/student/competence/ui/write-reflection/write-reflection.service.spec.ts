import { TestBed } from '@angular/core/testing';

import { WriteReflectionService } from './write-reflection.service';

describe('WriteReflectionService', () => {
  let service: WriteReflectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriteReflectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
