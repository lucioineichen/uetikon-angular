import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentRoutingModule } from './student-routing.module'
import { StudentCoursesComponent } from './student-courses/student-courses.component'
import { StudentService } from './student.service'
import { MaterialModule } from '../material.module'
import { StudentCourseComponent } from './student-course/student-course.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    StudentHomeComponent,
    StudentCoursesComponent,
    StudentCourseComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, MaterialModule, FormsModule],
  providers: [StudentService],
})
export class StudentModule {}
