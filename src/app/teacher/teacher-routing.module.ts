import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'
import { TeacherStudyJobsComponent } from './study-jobs/study-jobs.component'
import { FolderComponent } from './folder/folder.component'
import { JobComponent } from './job/job.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectComponent } from './project/project.component'
import { StudentsComponent } from './students/students.component'
import { StudentComponent } from './student/student.component'
import { UfkComponent } from './ufk/ufk.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/courses', pathMatch: 'full' },
  { path: 'courses', component: TeacherCoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
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
  { path: 'students', component: StudentsComponent },
  { path: 'ufk', component: UfkComponent },
  { path: 'students/:id', component: StudentComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
