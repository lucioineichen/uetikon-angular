import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCompetenceListComponent } from './filtered-competence-list.component';

describe('FilteredCompetenceListComponent', () => {
  let component: FilteredCompetenceListComponent;
  let fixture: ComponentFixture<FilteredCompetenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredCompetenceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredCompetenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
