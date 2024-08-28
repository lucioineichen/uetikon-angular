import { TestBed } from '@angular/core/testing';

import { GroupControlService } from './group-control.service';

describe('GroupControlService', () => {
  let service: GroupControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
