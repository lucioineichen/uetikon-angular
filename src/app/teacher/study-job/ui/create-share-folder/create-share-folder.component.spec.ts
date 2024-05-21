import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShareFolderComponent } from './create-share-folder.component';

describe('CreateShareFolderComponent', () => {
  let component: CreateShareFolderComponent;
  let fixture: ComponentFixture<CreateShareFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShareFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShareFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
