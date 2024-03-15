import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobComponent } from './job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { TaskModule } from 'src/app/shared/ui/task/task.module'
import { CompetencesControlModule } from '../../shared/ui/competences-control/competences-control.module'

@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AddButtonModule,
    TaskModule,
    CompetencesControlModule,
  ],
})
export class JobModule {}
