import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectControlComponent } from './subject-control.component';

describe('SubjectControlComponent', () => {
  let component: SubjectControlComponent;
  let fixture: ComponentFixture<SubjectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
