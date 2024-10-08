import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudyJobComponent } from './study-job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { TaskProgressModule } from './task-progress/task-progress.module'
import { EnterTaskProgressModule } from 'src/app/shared/ui/enter-task-progress/enter-task-progress.module'
import { AddSubmissionModule } from './add-submission/add-submission.module'
import { StudyMaterialModule } from 'src/app/shared/ui/study-material/study-material.module'

@NgModule({
  declarations: [StudyJobComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TaskProgressModule,
    EnterTaskProgressModule,
    AddSubmissionModule,
    StudyMaterialModule,
  ],
})
export class StudyJobModule {}
