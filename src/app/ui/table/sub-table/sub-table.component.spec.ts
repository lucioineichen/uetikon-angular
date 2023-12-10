import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTableComponent } from './sub-table.component';

describe('SubTableComponent', () => {
  let component: SubTableComponent;
  let fixture: ComponentFixture<SubTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
