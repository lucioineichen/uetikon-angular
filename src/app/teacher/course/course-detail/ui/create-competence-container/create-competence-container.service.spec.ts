import { TestBed } from '@angular/core/testing';

import { CreateCompetenceContainerService } from './create-competence-container.service';

describe('CreateCompetenceContainerService', () => {
  let service: CreateCompetenceContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCompetenceContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
