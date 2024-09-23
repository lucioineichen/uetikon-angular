import { TestBed } from '@angular/core/testing';

import { AddStudyMaterialService } from './add-study-material.service';

describe('AddStudyMaterialService', () => {
  let service: AddStudyMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStudyMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
