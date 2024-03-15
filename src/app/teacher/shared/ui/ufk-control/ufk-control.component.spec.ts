import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfkControlComponent } from './ufk-control.component';

describe('UfkControlComponent', () => {
  let component: UfkControlComponent;
  let fixture: ComponentFixture<UfkControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfkControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfkControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
