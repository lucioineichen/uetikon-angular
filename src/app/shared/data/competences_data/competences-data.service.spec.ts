import { TestBed } from '@angular/core/testing';

import { CompetencesDataService } from './competences-data.service';

describe('CompetencesDataService', () => {
  let service: CompetencesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetencesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
