import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/home', pathMatch: 'full' },
  { path: 'home', component: TeacherHomeComponent },
  { path: 'courses', component: TeacherCoursesComponent },
  { path: 'course/:id', component: TeacherCourseComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
