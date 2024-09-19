import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentRoutingModule } from './student-routing.module'
import { StudentCoursesComponent } from '../course/course-list/student-courses.component'
import { MaterialModule } from '../../shared/ui/material.module'
import { FormsModule } from '@angular/forms'
import { StudentComponent } from './student.component'
import { FileModule } from '../../shared/ui/file/file.module'
import { CompetenceListModule } from '../competence/competence-list.module'
import { JobDetailModule } from '../job-detail/job-detail.module'
import { CourseDetailModule } from '../course/course-detail/course-detail.module'
import { EditPathModule } from '../course/edit-path/edit-path.module'
import { CourseListModule } from '../course/course-list/course-list.module'
import { StudyJobModule } from '../study-job/study-job.module'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    FormsModule,
    FileModule,
    CompetenceListModule,
    JobDetailModule,
    CourseDetailModule,
    EditPathModule,
    CourseListModule,
    StudyJobModule,
  ],
})
export class StudentModule {}
