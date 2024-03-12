import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStudentsComponent } from './select-students.component';

describe('SelectStudentsComponent', () => {
  let component: SelectStudentsComponent;
  let fixture: ComponentFixture<SelectStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
