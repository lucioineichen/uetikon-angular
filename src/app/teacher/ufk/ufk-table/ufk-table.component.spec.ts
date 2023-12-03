import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfkTableComponent } from './ufk-table.component';

describe('UfkTableComponent', () => {
  let component: UfkTableComponent;
  let fixture: ComponentFixture<UfkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfkTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
