import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCompetencesFormComponent } from './select-competences-form.component';

describe('SelectCompetencesFormComponent', () => {
  let component: SelectCompetencesFormComponent;
  let fixture: ComponentFixture<SelectCompetencesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCompetencesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCompetencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
