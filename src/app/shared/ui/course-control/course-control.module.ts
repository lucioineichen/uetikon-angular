import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseControlComponent } from './course-control.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectCourseModule } from '../select-course/select-course.module'

@NgModule({
  declarations: [CourseControlComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectCourseModule,
  ],
  exports: [CourseControlComponent],
})
export class CourseControlModule {}
