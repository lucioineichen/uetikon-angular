import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCompetenceListComponent } from './pick-competence-list.component';

describe('PickCompetenceListComponent', () => {
  let component: PickCompetenceListComponent;
  let fixture: ComponentFixture<PickCompetenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickCompetenceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickCompetenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
