import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AdministratorComponent } from './administrator.component'
import { CompetencesModule } from '../competence/competences.module'
import { RouterModule } from '@angular/router'
import { ParentModule } from '../parent/parent.module'
import { AdministratorRoutingModule } from './administrator-routing.module'
import { TeacherModule } from '../teachers/teacher-list/teacher.module'
import { TeacherDetailModule } from '../teachers/teacher-detail/teacher.module'
import { StudentDetailModule } from '../students/student-detail/student-detail.module'
import { StudentListModule } from '../students/student-list/student-list.module'
import { StudentFormModule } from '../students/student-list/ui/student-form/student-form.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [AdministratorComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    CompetencesModule,
    RouterModule,
    ParentModule,
    StudentListModule,
    TeacherModule,
    TeacherDetailModule,
    StudentDetailModule,
    StudentFormModule,
    ToolbarModule,
  ],
})
export class AdministratorModule {}
