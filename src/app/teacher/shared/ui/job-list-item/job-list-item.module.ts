import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobListItemComponent } from './job-list-item.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [JobListItemComponent],
  exports: [JobListItemComponent],
  imports: [CommonModule, MaterialModule],
})
export class JobListItemModule {}
