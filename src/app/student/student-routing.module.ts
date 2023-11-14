import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentCoursesComponent } from './student-courses/student-courses.component'
import { StudentCourseComponent } from './student-course/student-course.component'
import { StudyJobComponent } from './study-job/study-job.component'
import { TaskComponent } from './task/task.component'
import { CompetencesComponent } from './competences/competences.component'

const routes: Routes = [
  { path: '', redirectTo: '/student/courses', pathMatch: 'full' },
  { path: 'competences', component: CompetencesComponent },
  { path: 'courses', component: StudentCoursesComponent },
  { path: 'course/:id', component: StudentCourseComponent },
  { path: 'study-job/:id', component: StudyJobComponent },
  { path: 'task/:id', component: TaskComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
