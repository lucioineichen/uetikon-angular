import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePathComponent } from './competence-path.component';

describe('CompetencePathComponent', () => {
  let component: CompetencePathComponent;
  let fixture: ComponentFixture<CompetencePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencePathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
