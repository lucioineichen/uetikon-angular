import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingUfkTableComponent } from './loading-ufk-table.component';

describe('LoadingUfkTableComponent', () => {
  let component: LoadingUfkTableComponent;
  let fixture: ComponentFixture<LoadingUfkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingUfkTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingUfkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
