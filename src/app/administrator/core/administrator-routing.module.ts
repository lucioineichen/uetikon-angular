import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CompetencesComponent } from '../competences/competences.component'
import { ParentComponent } from '../parents/parents.component'
import { StudentListComponent } from '../students/student-list/students.component'
import { TeachersComponent } from '../teachers/teachers.component'
import { TeacherComponent } from '../teachers/teacher/teacher.component'
import { StudentComponent } from '../students/student/student.component'

const routes: Routes = [
  { path: '', redirectTo: '/administrator/competences', pathMatch: 'full' },
  { path: 'competences', component: CompetencesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/:id', component: TeacherComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentComponent },
  { path: 'parents', component: ParentComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
