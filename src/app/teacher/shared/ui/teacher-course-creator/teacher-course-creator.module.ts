import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeacherCourseCreatorComponent } from './teacher-course-creator-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TeacherCourseCreatorComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class TeacherCourseCreatorModule {}
