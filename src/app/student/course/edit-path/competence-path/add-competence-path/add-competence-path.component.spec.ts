import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetencePathComponent } from './add-competence-path.component';

describe('AddCompetencePathComponent', () => {
  let component: AddCompetencePathComponent;
  let fixture: ComponentFixture<AddCompetencePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompetencePathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompetencePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
