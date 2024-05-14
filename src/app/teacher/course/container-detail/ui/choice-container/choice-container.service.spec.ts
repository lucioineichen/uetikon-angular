import { TestBed } from '@angular/core/testing';

import { ChoiceContainerService } from './choice-container.service';

describe('ChoiceContainerService', () => {
  let service: ChoiceContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoiceContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
