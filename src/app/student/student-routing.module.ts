import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentCoursesComponent } from './student-courses/student-courses.component'

const routes: Routes = [
  { path: '', redirectTo: '/student/home', pathMatch: 'full' },
  { path: 'home', component: StudentHomeComponent },
  { path: 'courses', component: StudentCoursesComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
