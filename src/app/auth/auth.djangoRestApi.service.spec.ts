import { TestBed } from '@angular/core/testing'

import { DjangoRestApiAuthService } from './auth.djangoRestApi.service'

describe('DjangoRestApiService', () => {
  let service: DjangoRestApiAuthService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DjangoRestApiAuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
