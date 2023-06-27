import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyJobExpectationComponent } from './study-job-expectation.component';

describe('StudyJobExpectationComponent', () => {
  let component: StudyJobExpectationComponent;
  let fixture: ComponentFixture<StudyJobExpectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyJobExpectationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyJobExpectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
