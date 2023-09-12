import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentRoutingModule } from './student-routing.module'
import { StudentCoursesComponent } from './student-courses/student-courses.component'
import { StudentService } from './student.service'
import { MaterialModule } from '../material.module'
import { StudentCourseComponent } from './student-course/student-course.component'
import { FormsModule } from '@angular/forms'
import { StudyPathComponent } from './study-path/study-path.component'
import { StudentComponent } from './student.component'
import { UiModule } from '../ui.module';
import { StudyJobComponent } from './study-job/study-job.component';
import { TaskComponent } from './task/task.component'

@NgModule({
  declarations: [
    StudentHomeComponent,
    StudentCoursesComponent,
    StudentCourseComponent,
    StudyPathComponent,
    StudentComponent,
    StudyJobComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    FormsModule,
    UiModule,
  ],
  providers: [StudentService],
})
export class StudentModule {}
