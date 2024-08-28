import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobListItemComponent } from './job-list-item.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { RouterModule } from '@angular/router'
import { JobStatusModule } from 'src/app/shared/ui/job-status/job-status.module'

@NgModule({
  declarations: [JobListItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule, JobStatusModule],
  exports: [JobListItemComponent],
})
export class JobListItemModule {}
