import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDependencyComponent } from './choose-dependency.component';

describe('ChooseDependencyComponent', () => {
  let component: ChooseDependencyComponent;
  let fixture: ComponentFixture<ChooseDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseDependencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
