import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmJobComponent } from './confirm-job.component';

describe('ConfirmJobComponent', () => {
  let component: ConfirmJobComponent;
  let fixture: ComponentFixture<ConfirmJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
