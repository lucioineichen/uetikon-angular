import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentCoursesComponent } from './student-courses/student-courses.component'
import { StudentCourseComponent } from './student-course/student-course.component'

const routes: Routes = [
  { path: '', redirectTo: '/student/courses', pathMatch: 'full' },
  { path: 'home', component: StudentHomeComponent },
  { path: 'courses', component: StudentCoursesComponent },
  { path: 'course/:id', component: StudentCourseComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
