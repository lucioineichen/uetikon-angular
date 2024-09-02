import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgressTableComponent } from './edit-progress-table.component';

describe('EditProgressTableComponent', () => {
  let component: EditProgressTableComponent;
  let fixture: ComponentFixture<EditProgressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgressTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
