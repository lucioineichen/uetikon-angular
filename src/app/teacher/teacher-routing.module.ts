import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'
import { TeacherStudyJobsComponent } from './study-jobs/study-jobs.component'
import { FolderComponent } from './folder/folder.component'
import { JobComponent } from './job/job.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/courses', pathMatch: 'full' },

  {
    path: 'courses',
    redirectTo: '/teacher/courses/overview',
    pathMatch: 'full',
  },
  { path: 'courses/overview', component: TeacherCoursesComponent },
  { path: 'courses/:id', component: TeacherCourseComponent },
  { path: 'study-jobs/folder/:id', component: FolderComponent },
  {
    path: 'study-jobs/:id',
    component: JobComponent,
    data: {
      animation: 'modal',
    },
  },
  { path: 'study-jobs', component: TeacherStudyJobsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
