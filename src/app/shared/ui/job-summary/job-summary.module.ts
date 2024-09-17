import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobSummaryComponent } from './job-summary.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [JobSummaryComponent],
  imports: [CommonModule, MaterialModule],
  exports: [JobSummaryComponent],
})
export class JobSummaryModule {}
