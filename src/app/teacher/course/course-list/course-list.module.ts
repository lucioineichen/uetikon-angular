import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseListComponent } from './teacher-courses.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { TeacherCourseCreatorModule } from '../../shared/ui/teacher-course-creator/teacher-course-creator.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TeacherCourseCreatorModule,
    ToolbarModule,
  ],
})
export class CourseListModule {}
