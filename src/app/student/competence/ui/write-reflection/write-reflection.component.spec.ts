import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReflectionComponent } from './write-reflection.component';

describe('WriteReflectionComponent', () => {
  let component: WriteReflectionComponent;
  let fixture: ComponentFixture<WriteReflectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteReflectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
