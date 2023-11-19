import { TestBed } from '@angular/core/testing';

import { ClassControlService } from './class-control.service';

describe('ClassControlService', () => {
  let service: ClassControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
