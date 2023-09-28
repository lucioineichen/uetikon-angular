import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCompetencesComponent } from './async-competences.component';

describe('AsyncCompetencesComponent', () => {
  let component: AsyncCompetencesComponent;
  let fixture: ComponentFixture<AsyncCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncCompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
