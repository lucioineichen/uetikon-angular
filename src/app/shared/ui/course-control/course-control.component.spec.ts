import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlComponent } from './course-control.component';

describe('CourseControlComponent', () => {
  let component: CourseControlComponent;
  let fixture: ComponentFixture<CourseControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
