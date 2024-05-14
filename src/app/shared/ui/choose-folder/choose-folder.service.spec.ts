import { TestBed } from '@angular/core/testing';

import { ChooseFolderService } from './choose-folder.service';

describe('ChooseFolderService', () => {
  let service: ChooseFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
