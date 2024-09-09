import { TestBed } from '@angular/core/testing';

import { MandetoryPathService } from './mandetory-path.service';

describe('MandetoryPathService', () => {
  let service: MandetoryPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandetoryPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
