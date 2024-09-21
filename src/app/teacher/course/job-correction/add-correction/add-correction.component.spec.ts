import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorrectionComponent } from './add-correction.component';

describe('AddCorrectionComponent', () => {
  let component: AddCorrectionComponent;
  let fixture: ComponentFixture<AddCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
