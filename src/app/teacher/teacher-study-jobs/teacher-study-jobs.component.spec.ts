import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudyJobsComponent } from './teacher-study-jobs.component';

describe('TeacherStudyJobsComponent', () => {
  let component: TeacherStudyJobsComponent;
  let fixture: ComponentFixture<TeacherStudyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudyJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
