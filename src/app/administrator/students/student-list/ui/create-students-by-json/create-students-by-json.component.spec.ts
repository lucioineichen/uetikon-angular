import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsByJsonComponent } from './create-students-by-json.component';

describe('CreateStudentsByJsonComponent', () => {
  let component: CreateStudentsByJsonComponent;
  let fixture: ComponentFixture<CreateStudentsByJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentsByJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentsByJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
