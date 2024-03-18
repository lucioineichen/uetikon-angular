import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentCoursesComponent } from '../course/course-list/student-courses.component'
import { StudentCourseComponent } from '../course/course-detail/student-course.component'
import { JobDetialComponent } from '../job-detail/study-job.component'
import { TaskComponent } from '../job-detail/ui/task/task.component'
import { CompetenceListComponent } from '../competence/competences.component'

const routes: Routes = [
  { path: '', redirectTo: '/student/courses', pathMatch: 'full' },
  { path: 'competences', component: CompetenceListComponent },
  { path: 'courses', component: StudentCoursesComponent },
  { path: 'course/:id', component: StudentCourseComponent },
  { path: 'study-job/:id', component: JobDetialComponent },
  { path: 'task/:id', component: TaskComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
