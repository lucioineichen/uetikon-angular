import { TestBed } from '@angular/core/testing';

import { ChooseDependencyService } from './choose-dependency.service';

describe('ChooseDependencyService', () => {
  let service: ChooseDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
