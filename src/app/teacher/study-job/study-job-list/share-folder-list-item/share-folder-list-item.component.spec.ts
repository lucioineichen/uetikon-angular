import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFolderListItemComponent } from './share-folder-list-item.component';

describe('ShareFolderListItemComponent', () => {
  let component: ShareFolderListItemComponent;
  let fixture: ComponentFixture<ShareFolderListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareFolderListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareFolderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
