import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { MaterialModule } from '../material.module'
import { TeacherCourseCreatorDialogComponent } from './teacher-courses/teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AddStudentsDialogComponent } from './add-students-dialog/add-students-dialog.component'

@NgModule({
  declarations: [
    TeacherHomeComponent,
    TeacherCoursesComponent,
    TeacherCourseCreatorDialogComponent,
    AddStudentsDialogComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class TeacherModule {}
