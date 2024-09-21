import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCorrectionComponent } from './job-correction.component';

describe('JobCorrectionComponent', () => {
  let component: JobCorrectionComponent;
  let fixture: ComponentFixture<JobCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
