import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentControlComponent } from './student-control.component';

describe('StudentControlComponent', () => {
  let component: StudentControlComponent;
  let fixture: ComponentFixture<StudentControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
