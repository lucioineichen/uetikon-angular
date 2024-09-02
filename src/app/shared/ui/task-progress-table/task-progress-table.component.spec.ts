import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressTableComponent } from './task-progress-table.component';

describe('TaskProgressTableComponent', () => {
  let component: TaskProgressTableComponent;
  let fixture: ComponentFixture<TaskProgressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskProgressTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
