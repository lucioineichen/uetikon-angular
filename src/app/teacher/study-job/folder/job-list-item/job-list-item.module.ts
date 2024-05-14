import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobListItemComponent } from './job-list-item.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [JobListItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [JobListItemComponent],
})
export class JobListItemModule {}
