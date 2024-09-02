import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTaskProgressComponent } from './enter-task-progress.component';

describe('EnterTaskProgressComponent', () => {
  let component: EnterTaskProgressComponent;
  let fixture: ComponentFixture<EnterTaskProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterTaskProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterTaskProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
