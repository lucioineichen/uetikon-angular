import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClassesComponent } from './select-classes.component';

describe('SelectClassesComponent', () => {
  let component: SelectClassesComponent;
  let fixture: ComponentFixture<SelectClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
