import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyJobComponent } from './study-job.component';

describe('StudyJobComponent', () => {
  let component: StudyJobComponent;
  let fixture: ComponentFixture<StudyJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
