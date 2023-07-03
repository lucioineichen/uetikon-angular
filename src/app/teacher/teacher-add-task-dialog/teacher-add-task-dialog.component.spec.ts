import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddTaskDialogComponent } from './teacher-add-task-dialog.component';

describe('TeacherAddTaskDialogComponent', () => {
  let component: TeacherAddTaskDialogComponent;
  let fixture: ComponentFixture<TeacherAddTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddTaskDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
