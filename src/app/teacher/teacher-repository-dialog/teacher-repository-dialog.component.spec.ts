import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRepositoryDialogComponent } from './teacher-repository-dialog.component';

describe('TeacherRepositoryDialogComponent', () => {
  let component: TeacherRepositoryDialogComponent;
  let fixture: ComponentFixture<TeacherRepositoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRepositoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherRepositoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
