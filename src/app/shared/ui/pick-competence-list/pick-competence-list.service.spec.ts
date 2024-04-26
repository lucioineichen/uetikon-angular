import { TestBed } from '@angular/core/testing';

import { PickCompetenceListService } from './pick-competence-list.service';

describe('PickCompetenceListService', () => {
  let service: PickCompetenceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickCompetenceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
