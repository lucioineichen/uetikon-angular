import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobsComponent } from './select-jobs.component';

describe('SelectJobsComponent', () => {
  let component: SelectJobsComponent;
  let fixture: ComponentFixture<SelectJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
