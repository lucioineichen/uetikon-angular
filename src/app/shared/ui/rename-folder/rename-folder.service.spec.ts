import { TestBed } from '@angular/core/testing';

import { RenameFolderService } from './rename-folder.service';

describe('RenameFolderService', () => {
  let service: RenameFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenameFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
