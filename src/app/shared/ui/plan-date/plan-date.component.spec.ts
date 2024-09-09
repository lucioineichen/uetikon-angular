import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDateComponent } from './plan-date.component';

describe('PlanDateComponent', () => {
  let component: PlanDateComponent;
  let fixture: ComponentFixture<PlanDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
