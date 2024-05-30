import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChooseJobComponent } from './choose-study-jobs-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FolderListItemModule } from '../folder-list-item/folder-list-item.module'
import { JobListItemModule } from '../job-list-item/job-list-item.module'
import { ConfirmJobComponent } from './confirm-job/confirm-job.component'
import { ShareFolderListItemModule } from 'src/app/teacher/study-job/ui/share-folder-list-item/share-folder-list-item.module'

@NgModule({
  declarations: [ChooseJobComponent, ConfirmJobComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    JobListItemModule,
    ShareFolderListItemModule,
  ],
})
export class ChooseJobModule {}
