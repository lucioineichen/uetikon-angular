import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUfkComponent } from './add-ufk.component';

describe('AddUfkComponent', () => {
  let component: AddUfkComponent;
  let fixture: ComponentFixture<AddUfkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUfkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUfkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
