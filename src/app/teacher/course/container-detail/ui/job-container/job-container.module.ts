import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobContainerComponent } from './job-container.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { MandetoryJobModule } from '../../../course-detail/ui/mandetory-job/mandetory-job.module'

@NgModule({
  declarations: [JobContainerComponent],
  imports: [CommonModule, MaterialModule, MandetoryJobModule],
  exports: [JobContainerComponent],
})
export class JobContainerModule {}
