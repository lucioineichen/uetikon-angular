import { TestBed } from '@angular/core/testing';

import { ChooseJobService } from './choose-job.service';

describe('ChooseJobService', () => {
  let service: ChooseJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
