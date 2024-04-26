import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompetenceContainerComponent } from './create-competence-container.component';

describe('CreateCompetenceContainerComponent', () => {
  let component: CreateCompetenceContainerComponent;
  let fixture: ComponentFixture<CreateCompetenceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompetenceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCompetenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
