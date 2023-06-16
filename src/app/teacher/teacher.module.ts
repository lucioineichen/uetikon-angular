import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { MaterialModule } from '../material.module'
import { TeacherCourseCreatorDialogComponent } from './teacher-courses/teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddStudentsDialogComponent } from './add-students-dialog/add-students-dialog.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { TeacherComponent } from './teacher.component';
import { TeacherModuleCreatorDialogComponent } from './teacher-module-creator-dialog/teacher-module-creator-dialog.component'

@NgModule({
  declarations: [
    TeacherHomeComponent,
    TeacherCoursesComponent,
    TeacherCourseCreatorDialogComponent,
    AddStudentsDialogComponent,
    TeacherCourseComponent,
    TeacherComponent,
    TeacherModuleCreatorDialogComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TeacherModule {}
