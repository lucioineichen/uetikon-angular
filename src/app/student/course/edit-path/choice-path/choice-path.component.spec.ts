import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePathComponent } from './choice-path.component';

describe('ChoicePathComponent', () => {
  let component: ChoicePathComponent;
  let fixture: ComponentFixture<ChoicePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoicePathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoicePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
