import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SelectCompetencesComponent } from './select-competences-form.component'

describe('TeacherChooseCompetencesDialogComponent', () => {
  let component: SelectCompetencesComponent
  let fixture: ComponentFixture<SelectCompetencesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCompetencesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SelectCompetencesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
