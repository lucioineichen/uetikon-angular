import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/home', pathMatch: 'full' },
  { path: 'home', component: TeacherHomeComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
