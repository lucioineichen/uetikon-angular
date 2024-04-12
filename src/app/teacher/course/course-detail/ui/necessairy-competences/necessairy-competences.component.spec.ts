import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessairyCompetencesComponent } from './necessairy-competences.component';

describe('NecessairyCompetencesComponent', () => {
  let component: NecessairyCompetencesComponent;
  let fixture: ComponentFixture<NecessairyCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecessairyCompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecessairyCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
