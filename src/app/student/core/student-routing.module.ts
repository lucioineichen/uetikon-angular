import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentCoursesComponent } from '../course/course-list/student-courses.component'
import { StudentCourseComponent } from '../course/course-detail/student-course.component'
import { JobDetialComponent } from '../job-detail/study-job.component'
import { TaskComponent } from '../job-detail/ui/task/task.component'
import { CompetenceListComponent } from '../competence/competences.component'
import { EditPathComponent } from '../course/edit-path/edit-path.component'

const routes: Routes = [
  { path: '', redirectTo: '/student/courses', pathMatch: 'full' },
  { path: 'competences', component: CompetenceListComponent },
  { path: 'courses', component: StudentCoursesComponent },
  { path: 'courses/:courseId', redirectTo: 'course/:courseId' },
  { path: 'course/:courseId', component: StudentCourseComponent },
  // { path: 'study-jobs/:id', component: JobDetialComponent },
  // { path: 'study-job/:id', redirectTo: 'study-jobs/:id' },
  // { path: 'tasks/:id', component: TaskComponent },
  // { path: 'task/:id', redirectTo: 'tasks/:id' },
  {
    path: 'course/:courseId/edit-path',
    component: EditPathComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
