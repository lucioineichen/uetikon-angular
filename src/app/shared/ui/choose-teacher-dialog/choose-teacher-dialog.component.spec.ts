import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTeacherDialogComponent } from './choose-teacher-dialog.component';

describe('ChooseTeacherDialogComponent', () => {
  let component: ChooseTeacherDialogComponent;
  let fixture: ComponentFixture<ChooseTeacherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTeacherDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTeacherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
