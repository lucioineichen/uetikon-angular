import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandetoryJobComponent } from './mandetory-job.component';

describe('MandetoryJobComponent', () => {
  let component: MandetoryJobComponent;
  let fixture: ComponentFixture<MandetoryJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandetoryJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandetoryJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
