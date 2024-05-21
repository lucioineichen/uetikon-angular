import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatingTeacherListComponent } from './participating-teacher-list.component';

describe('ParticipatingTeacherListComponent', () => {
  let component: ParticipatingTeacherListComponent;
  let fixture: ComponentFixture<ParticipatingTeacherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipatingTeacherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipatingTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
