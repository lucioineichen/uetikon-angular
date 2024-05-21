import { TestBed } from '@angular/core/testing';

import { CreateShareFolderService } from './create-share-folder.service';

describe('CreateShareFolderService', () => {
  let service: CreateShareFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateShareFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
