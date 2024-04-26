import { TestBed } from '@angular/core/testing';

import { ContainerDetailService } from './container-detail.service';

describe('ContainerDetailService', () => {
  let service: ContainerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
