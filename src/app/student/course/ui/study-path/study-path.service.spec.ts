import { TestBed } from '@angular/core/testing';

import { StudyPathService } from './study-path.service';

describe('StudyPathService', () => {
  let service: StudyPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
