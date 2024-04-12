import { TestBed } from '@angular/core/testing';

import { CreateMandetoryService } from './create-mandetory.service';

describe('CreateMandetoryService', () => {
  let service: CreateMandetoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMandetoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
