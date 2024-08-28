import { TestBed } from '@angular/core/testing';

import { CommitContainerService } from './commit-container.service';

describe('CommitContainerService', () => {
  let service: CommitContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
