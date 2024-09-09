import { TestBed } from '@angular/core/testing';

import { ChoicePathService } from './choice-path.service';

describe('ChoicePathService', () => {
  let service: ChoicePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoicePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
