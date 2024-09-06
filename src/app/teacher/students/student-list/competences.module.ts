import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentListComponent } from './competences.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { TeacherControlModule } from '../../shared/ui/teacher-control/teacher-control.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { CompetencesTableModule } from './competences-table/competences-table.module'
import { GroupControlModule } from '../../shared/ui/group-control/group-control.module'
import { CourseControlModule } from '../../shared/ui/course-control/course-control.module'
import { JobControlModule } from '../../shared/ui/job-control/job-control.module'
import { UfkControlModule } from 'src/app/shared/ui/ufk-control/ufk-control.module'

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AddButtonModule,
    CompetencesTableModule,
    TeacherControlModule,
    UfkControlModule,
    GroupControlModule,
    CourseControlModule,
    JobControlModule,
  ],
})
export class StudentListModule {}
