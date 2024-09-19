import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTreeComponent } from './competence-tree.component';

describe('CompetenceTreeComponent', () => {
  let component: CompetenceTreeComponent;
  let fixture: ComponentFixture<CompetenceTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
