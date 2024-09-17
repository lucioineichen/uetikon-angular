import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFolderComponent } from './loading-folder.component';

describe('LoadingFolderComponent', () => {
  let component: LoadingFolderComponent;
  let fixture: ComponentFixture<LoadingFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
