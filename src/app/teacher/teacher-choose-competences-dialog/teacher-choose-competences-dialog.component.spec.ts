import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherChooseCompetencesDialogComponent } from './teacher-choose-competences-dialog.component';

describe('TeacherChooseCompetencesDialogComponent', () => {
  let component: TeacherChooseCompetencesDialogComponent;
  let fixture: ComponentFixture<TeacherChooseCompetencesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherChooseCompetencesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherChooseCompetencesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
