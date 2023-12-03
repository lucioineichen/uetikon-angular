import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskControlComponent } from './add-task-control.component';

describe('AddTaskControlComponent', () => {
  let component: AddTaskControlComponent;
  let fixture: ComponentFixture<AddTaskControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
