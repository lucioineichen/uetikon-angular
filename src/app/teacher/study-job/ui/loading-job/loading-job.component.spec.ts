import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingJobComponent } from './loading-job.component';

describe('LoadingJobComponent', () => {
  let component: LoadingJobComponent;
  let fixture: ComponentFixture<LoadingJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
