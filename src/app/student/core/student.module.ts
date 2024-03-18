import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentRoutingModule } from './student-routing.module'
import { StudentCoursesComponent } from '../course/course-list/student-courses.component'
import { MaterialModule } from '../../shared/ui/material.module'
import { StudentCourseComponent } from '../course/course-detail/student-course.component'
import { FormsModule } from '@angular/forms'
import { StudentComponent } from './student.component'
import { FileModule } from '../../shared/ui/file/file.module'
import { CompetenceListModule } from '../competence/competence-list.module'
import { JobDetailModule } from '../job-detail/job-detail.module'

@NgModule({
  declarations: [
    StudentCoursesComponent,
    StudentCourseComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    FormsModule,
    FileModule,
    CompetenceListModule,
    JobDetailModule,
  ],
})
export class StudentModule {}
