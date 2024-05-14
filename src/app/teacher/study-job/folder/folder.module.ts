import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FolderComponent } from './folder.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FolderListItemModule } from '../ui/folder-list-item/folder-list-item.module'
import { RouterModule } from '@angular/router'
import { AddStudyJobModule } from '../ui/add-study-job/add-study-job.module'
import { JobListItemModule } from './job-list-item/job-list-item.module'

@NgModule({
  declarations: [FolderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    RouterModule,
    AddStudyJobModule,
    JobListItemModule,
  ],
})
export class FolderModule {}
