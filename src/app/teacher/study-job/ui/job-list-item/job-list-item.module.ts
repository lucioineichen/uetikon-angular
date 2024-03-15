import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { JobListItemComponent } from './job-list-item.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [JobListItemComponent],
  exports: [JobListItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class JobListItemModule {}
