import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesTableComponent } from './competences-table.component';

describe('CompetencesTableComponent', () => {
  let component: CompetencesTableComponent;
  let fixture: ComponentFixture<CompetencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
