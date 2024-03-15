import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeacherSubjectSelectorComponent } from './subjects.component'

describe('SubjectsComponent', () => {
  let component: TeacherSubjectSelectorComponent
  let fixture: ComponentFixture<TeacherSubjectSelectorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherSubjectSelectorComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TeacherSubjectSelectorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
