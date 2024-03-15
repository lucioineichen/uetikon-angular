import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentListComponent } from './competences.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { TeacherControlModule } from '../../shared/ui/teacher-control/teacher-control.module'
import { ClassControlModule } from '../../shared/ui/class-control/class-control.module'
import { StudentControlModule } from '../../shared/ui/student-control/student-control.module'
import { SubjectControlModule } from '../../shared/ui/subject-control/subject-control.module'
import { UfkControlModule } from '../../shared/ui/ufk-control/ufk-control.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { CompetencesTableModule } from './competences-table/competences-table.module'

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AddButtonModule,
    CompetencesTableModule,
    TeacherControlModule,
    SubjectControlModule,
    StudentControlModule,
    ClassControlModule,
    UfkControlModule,
  ],
})
export class StudentListModule {}
