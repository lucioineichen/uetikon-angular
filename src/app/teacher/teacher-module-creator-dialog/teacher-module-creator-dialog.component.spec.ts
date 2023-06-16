import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherModuleCreatorDialogComponent } from './teacher-module-creator-dialog.component';

describe('TeacherModuleCreatorDialogComponent', () => {
  let component: TeacherModuleCreatorDialogComponent;
  let fixture: ComponentFixture<TeacherModuleCreatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherModuleCreatorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherModuleCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
