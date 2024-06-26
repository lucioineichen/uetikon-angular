import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFolderComponent } from './choose-folder.component';

describe('ChooseFolderComponent', () => {
  let component: ChooseFolderComponent;
  let fixture: ComponentFixture<ChooseFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
