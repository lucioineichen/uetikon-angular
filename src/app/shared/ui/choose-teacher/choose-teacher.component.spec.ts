import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTeacherComponent } from './choose-teacher.component';

describe('ChooseTeacherComponent', () => {
  let component: ChooseTeacherComponent;
  let fixture: ComponentFixture<ChooseTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
