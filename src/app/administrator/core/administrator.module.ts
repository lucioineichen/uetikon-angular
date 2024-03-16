import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AdministratorComponent } from './administrator.component'
import { CompetencesModule } from '../competences/competences.module'
import { RouterModule } from '@angular/router'
import { ParentModule } from '../parents/parent.module'
import { StudentListModule } from '../student/student-list/student-list.module'

@NgModule({
  declarations: [AdministratorComponent],
  imports: [
    CommonModule,
    CompetencesModule,
    RouterModule,
    ParentModule,
    StudentListModule,
  ],
})
export class AdministratorModule {}
