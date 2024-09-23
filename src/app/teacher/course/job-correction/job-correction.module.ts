import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobCorrectionComponent } from './job-correction.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { TaskModule } from 'src/app/shared/ui/task/task.module'
import { TaskCorrectionModule } from './task-correction/task-correction.module'
import { StudyMaterialModule } from 'src/app/shared/ui/study-material/study-material.module'

@NgModule({
  declarations: [JobCorrectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TaskCorrectionModule,
    StudyMaterialModule,
  ],
})
export class JobCorrectionModule {}
