import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddStudyJobComponent } from './add-study-job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SubjectControlModule } from '../../../shared/ui/subject-control/subject-control.module'
import { AddTaskControlModule } from '../../../shared/ui/add-task-control/add-task-control.module'

@NgModule({
  declarations: [AddStudyJobComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SubjectControlModule,
    AddTaskControlModule,
  ],
})
export class AddStudyJobModule {}
