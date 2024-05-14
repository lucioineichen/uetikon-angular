import { TestBed } from '@angular/core/testing';

import { CompetenceContainerService } from './competence-container.service';

describe('CompetenceContainerService', () => {
  let service: CompetenceContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenceContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
