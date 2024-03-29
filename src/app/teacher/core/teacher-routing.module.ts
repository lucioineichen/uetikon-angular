import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CourseListComponent } from '../course/course-list/teacher-courses.component'
import { CourseDetailComponent } from '../course/course-detail/teacher-course.component'
import { FolderComponent } from '../study-job/folder/folder.component'
import { JobComponent } from '../study-job/job/job.component'
import { UfkComponent } from '../ufk/ufk.component'
import { StudentListComponent } from '../students/student-list/competences.component'
import { StudyJobListComponent } from '../study-job/study-job-list/study-jobs.component'
import { StudentDetailComponent } from '../students/student-detail/student.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'study-jobs/folder/:id', component: FolderComponent },
  {
    path: 'study-jobs/:id',
    component: JobComponent,
    data: {
      animation: 'modal',
    },
  },
  { path: 'study-jobs', component: StudyJobListComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'ufk', component: UfkComponent },
  { path: 'students/:id', component: StudentDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
