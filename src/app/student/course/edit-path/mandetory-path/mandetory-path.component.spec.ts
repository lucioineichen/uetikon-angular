import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandetoryPathComponent } from './mandetory-path.component';

describe('MandetoryPathComponent', () => {
  let component: MandetoryPathComponent;
  let fixture: ComponentFixture<MandetoryPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandetoryPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandetoryPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
