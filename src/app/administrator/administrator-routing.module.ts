import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CompetencesComponent } from './competences/competences.component'
import { ParentsComponent } from './parents/parents.component'
import { StudentsComponent } from './students/students.component'
import { TeachersComponent } from './teachers/teachers.component'
import { TeacherComponent } from './teachers/teacher/teacher.component'
import { StudentComponent } from './students/student/student.component'

const routes: Routes = [
  { path: '', redirectTo: '/administrator/competences', pathMatch: 'full' },
  { path: 'competences', component: CompetencesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/:id', component: TeacherComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentComponent },
  { path: 'parents', component: ParentsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
