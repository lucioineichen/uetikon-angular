import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobChoicesComponent } from './job-choices.component';

describe('JobChoicesComponent', () => {
  let component: JobChoicesComponent;
  let fixture: ComponentFixture<JobChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
