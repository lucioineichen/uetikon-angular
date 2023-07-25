import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyJobDisplayComponent } from './study-job-display.component';

describe('StudyJobDisplayComponent', () => {
  let component: StudyJobDisplayComponent;
  let fixture: ComponentFixture<StudyJobDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyJobDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyJobDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
