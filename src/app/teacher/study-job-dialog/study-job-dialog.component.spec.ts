import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StudyJobDialogComponent } from './study-job-dialog.component'

describe('StudyJobDialogComponent', () => {
  let component: StudyJobDialogComponent
  let fixture: ComponentFixture<StudyJobDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyJobDialogComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(StudyJobDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
