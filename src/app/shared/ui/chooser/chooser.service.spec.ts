import { TestBed } from '@angular/core/testing';

import { ChooserService } from './chooser.service';

describe('ChooserService', () => {
  let service: ChooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
