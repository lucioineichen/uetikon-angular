import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfkComponent } from './ufk.component';

describe('UfkComponent', () => {
  let component: UfkComponent;
  let fixture: ComponentFixture<UfkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
