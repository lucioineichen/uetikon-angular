import { TestBed } from '@angular/core/testing'

import { DialogService } from './ui.service'

describe('UiService', () => {
  let service: DialogService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DialogService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
