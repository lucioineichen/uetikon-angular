import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressTableComponent } from './progress-table.component'
import { MaterialModule } from '../material.module'
import { JobProgressTableModule } from '../job-progress-table/job-progress-table.module'
import { TaskProgressTableModule } from '../task-progress-table/task-progress-table.module'

@NgModule({
  declarations: [ProgressTableComponent],
  imports: [
    CommonModule,
    JobProgressTableModule,
    TaskProgressTableModule,
    MaterialModule,
  ],
  exports: [ProgressTableComponent],
})
export class ProgressTableModule {}
