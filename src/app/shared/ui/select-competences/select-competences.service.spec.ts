import { TestBed } from '@angular/core/testing';

import { SelectCompetencesService } from './select-competences.service';

describe('SelectCompetencesService', () => {
  let service: SelectCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectCompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
