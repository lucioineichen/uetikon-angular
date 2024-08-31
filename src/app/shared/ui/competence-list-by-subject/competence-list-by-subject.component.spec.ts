import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceListBySubjectComponent } from './competence-list-by-subject.component';

describe('CompetenceListBySubjectComponent', () => {
  let component: CompetenceListBySubjectComponent;
  let fixture: ComponentFixture<CompetenceListBySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceListBySubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceListBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
