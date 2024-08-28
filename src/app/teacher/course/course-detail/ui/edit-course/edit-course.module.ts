import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditCourseComponent } from './edit-course.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ChooseTeacherDialogModule } from 'src/app/shared/ui/choose-teacher-dialog/choose-teacher-dialog.module'

@NgModule({
  declarations: [EditCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ChooseTeacherDialogModule,
  ],
})
export class EditCourseModule {}
