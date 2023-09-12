import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPathComponent } from './study-path.component';

describe('StudyPathComponent', () => {
  let component: StudyPathComponent;
  let fixture: ComponentFixture<StudyPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
