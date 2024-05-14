import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceContainerComponent } from './competence-container.component';

describe('CompetenceContainerComponent', () => {
  let component: CompetenceContainerComponent;
  let fixture: ComponentFixture<CompetenceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
