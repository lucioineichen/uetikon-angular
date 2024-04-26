import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChoiceComponent } from './create-choice.component';

describe('CreateChoiceComponent', () => {
  let component: CreateChoiceComponent;
  let fixture: ComponentFixture<CreateChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
