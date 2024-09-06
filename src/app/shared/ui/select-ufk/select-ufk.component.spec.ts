import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUfkComponent } from './select-ufk.component';

describe('SelectUfkComponent', () => {
  let component: SelectUfkComponent;
  let fixture: ComponentFixture<SelectUfkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUfkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUfkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
