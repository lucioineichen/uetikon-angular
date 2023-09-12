import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobFromCourseComponent } from './select-job-from-course.component';

describe('SelectJobFromCourseComponent', () => {
  let component: SelectJobFromCourseComponent;
  let fixture: ComponentFixture<SelectJobFromCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectJobFromCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectJobFromCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
