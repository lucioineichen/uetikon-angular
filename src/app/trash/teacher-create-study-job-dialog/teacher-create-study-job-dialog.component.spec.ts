import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateStudyJobDialogComponent } from './teacher-create-study-job-dialog.component';

describe('TeacherCreateStudyJobDialogComponent', () => {
  let component: TeacherCreateStudyJobDialogComponent;
  let fixture: ComponentFixture<TeacherCreateStudyJobDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCreateStudyJobDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCreateStudyJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
