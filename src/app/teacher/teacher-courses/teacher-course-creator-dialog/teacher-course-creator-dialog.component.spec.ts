import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseCreatorDialogComponent } from './teacher-course-creator-dialog.component';

describe('TeacherCourseCreatorDialogComponent', () => {
  let component: TeacherCourseCreatorDialogComponent;
  let fixture: ComponentFixture<TeacherCourseCreatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCourseCreatorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCourseCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
