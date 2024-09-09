import { TestBed } from '@angular/core/testing';

import { CompetencePathService } from './competence-path.service';

describe('CompetencePathService', () => {
  let service: CompetencePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetencePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
