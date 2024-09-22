import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfkReflectionTableComponent } from './ufk-reflection-table.component';

describe('UfkReflectionTableComponent', () => {
  let component: UfkReflectionTableComponent;
  let fixture: ComponentFixture<UfkReflectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfkReflectionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfkReflectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
