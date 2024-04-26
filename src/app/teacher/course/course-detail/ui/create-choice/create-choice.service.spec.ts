import { TestBed } from '@angular/core/testing';

import { CreateChoiceService } from './create-choice.service';

describe('CreateChoiceService', () => {
  let service: CreateChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
