import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ChooseJobComponent } from './choose-study-jobs-dialog.component'

describe('ChooseJobComponent', () => {
  let component: ChooseJobComponent
  let fixture: ComponentFixture<ChooseJobComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseJobComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ChooseJobComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
