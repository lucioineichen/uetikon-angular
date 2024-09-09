import { TestBed } from '@angular/core/testing';

import { AddCompetencePathService } from './add-competence-path.service';

describe('AddCompetencePathService', () => {
  let service: AddCompetencePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCompetencePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
