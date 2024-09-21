import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCorrectionComponent } from './task-correction.component';

describe('TaskCorrectionComponent', () => {
  let component: TaskCorrectionComponent;
  let fixture: ComponentFixture<TaskCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
