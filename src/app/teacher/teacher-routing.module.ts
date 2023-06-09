import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'
import { TeacherStudyJobsComponent } from './teacher-study-jobs/teacher-study-jobs.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/courses', pathMatch: 'full' },

  { path: 'home', component: TeacherHomeComponent },
  {
    path: 'courses',
    redirectTo: '/teacher/courses/overview',
    pathMatch: 'full',
  },
  { path: 'courses/overview', component: TeacherCoursesComponent },
  { path: 'courses/:id', component: TeacherCourseComponent },
  { path: 'study-jobs', component: TeacherStudyJobsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
