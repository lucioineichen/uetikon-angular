import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskProgressTableComponent } from './edit-task-progress-table.component';

describe('EditTaskProgressTableComponent', () => {
  let component: EditTaskProgressTableComponent;
  let fixture: ComponentFixture<EditTaskProgressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaskProgressTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTaskProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
