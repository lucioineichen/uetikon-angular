import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMandetoryComponent } from './create-mandetory.component';

describe('CreateMandetoryComponent', () => {
  let component: CreateMandetoryComponent;
  let fixture: ComponentFixture<CreateMandetoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMandetoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMandetoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
