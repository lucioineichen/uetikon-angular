import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPathFormComponent } from './study-path-form.component';

describe('StudyPathFormComponent', () => {
  let component: StudyPathFormComponent;
  let fixture: ComponentFixture<StudyPathFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyPathFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyPathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
