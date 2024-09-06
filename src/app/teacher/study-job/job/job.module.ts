import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobComponent } from './job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { TaskModule } from 'src/app/shared/ui/task/task.module'
import { JobStatusModule } from 'src/app/shared/ui/job-status/job-status.module'
import { ChangeStatusModule } from '../ui/change-status/change-status.module'
import { SelectSubjectModule } from 'src/app/shared/ui/select-subject/select-subject.module'
import { ReactiveFormsModule } from '@angular/forms'
import { PickCompetenceListModule } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.module'
import { AddTaskModule } from '../../shared/ui/add-task/add-task.module'
import { TaskFormModule } from '../../shared/ui/task-form/task-form.module'

@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AddButtonModule,
    TaskModule,
    JobStatusModule,
    ChangeStatusModule,
    SelectSubjectModule,
    ReactiveFormsModule,
    PickCompetenceListModule,
    AddTaskModule,
    TaskFormModule,
  ],
})
export class JobModule {}
