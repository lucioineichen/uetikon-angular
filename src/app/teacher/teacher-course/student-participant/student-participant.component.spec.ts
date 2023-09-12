import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParticipantComponent } from './student-participant.component';

describe('StudentParticipantComponent', () => {
  let component: StudentParticipantComponent;
  let fixture: ComponentFixture<StudentParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
