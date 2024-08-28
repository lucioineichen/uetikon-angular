import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitContainerComponent } from './commit-container.component';

describe('CommitContainerComponent', () => {
  let component: CommitContainerComponent;
  let fixture: ComponentFixture<CommitContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
