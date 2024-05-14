import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceContainerComponent } from './choice-container.component';

describe('ChoiceContainerComponent', () => {
  let component: ChoiceContainerComponent;
  let fixture: ComponentFixture<ChoiceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
