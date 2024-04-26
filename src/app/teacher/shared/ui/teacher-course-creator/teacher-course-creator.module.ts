import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeacherCourseCreatorComponent } from './teacher-course-creator-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectStudentsModule } from 'src/app/shared/ui/select-students/select-students.module'

@NgModule({
  declarations: [TeacherCourseCreatorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectStudentsModule,
  ],
})
export class TeacherCourseCreatorModule {}
