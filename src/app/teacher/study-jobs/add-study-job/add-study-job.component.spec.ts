import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudyJobComponent } from './add-study-job.component';

describe('AddStudyJobComponent', () => {
  let component: AddStudyJobComponent;
  let fixture: ComponentFixture<AddStudyJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudyJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
