import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStudyJobsDialogComponent } from './choose-study-jobs-dialog.component';

describe('ChooseStudyJobsDialogComponent', () => {
  let component: ChooseStudyJobsDialogComponent;
  let fixture: ComponentFixture<ChooseStudyJobsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseStudyJobsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseStudyJobsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
