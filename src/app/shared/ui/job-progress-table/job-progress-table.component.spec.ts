import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProgressTableComponent } from './job-progress-table.component';

describe('JobProgressTableComponent', () => {
  let component: JobProgressTableComponent;
  let fixture: ComponentFixture<JobProgressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProgressTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
