import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesControlComponent } from './competences-control.component';

describe('CompetencesControlComponent', () => {
  let component: CompetencesControlComponent;
  let fixture: ComponentFixture<CompetencesControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
