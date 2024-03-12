import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherCoursesComponent } from '../courses/teacher-courses.component'
import { TeacherCourseComponent } from '../course/teacher-course.component'
import { TeacherStudyJobsComponent } from '../study-jobs/study-jobs.component'
import { FolderComponent } from '../folder/folder.component'
import { JobComponent } from '../job/job.component'
import { StudentsComponent } from '../students/students.component'
import { StudentComponent } from '../student/student.component'
import { UfkComponent } from '../ufk/ufk.component'
import { CompetenceComponent } from '../../shared/ui/competence/competence.component'
import { CompetencesComponent } from '../competences/competences.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/courses', pathMatch: 'full' },
  { path: 'courses', component: TeacherCoursesComponent },
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
  { path: 'students', component: CompetencesComponent },
  { path: 'ufk', component: UfkComponent },
  { path: 'students/:id', component: StudentComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
