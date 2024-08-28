import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobStatusPipe } from './job-status.pipe'

@NgModule({
  declarations: [JobStatusPipe],
  imports: [CommonModule],
  exports: [JobStatusPipe],
})
export class JobStatusModule {}
