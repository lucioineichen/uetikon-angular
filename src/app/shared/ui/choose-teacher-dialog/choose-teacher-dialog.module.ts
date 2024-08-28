import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseTeacherDialogComponent } from './choose-teacher-dialog.component';
import { ChooseTeacherModule } from '../choose-teacher/choose-teacher.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ChooseTeacherDialogComponent
  ],
  imports: [
    CommonModule,
    ChooseTeacherModule,
    MaterialModule
  ]
})
export class ChooseTeacherDialogModule { }
