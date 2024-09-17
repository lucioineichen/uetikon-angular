import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudyJobListComponent } from './study-jobs.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FolderListItemModule } from '../ui/folder-list-item/folder-list-item.module'
import { ChooseFolderModule } from 'src/app/shared/ui/choose-folder/choose-folder.module'
import { CreateShareFolderModule } from '../ui/create-share-folder/create-share-folder.module'
import { ShareFolderListItemModule } from '../ui/share-folder-list-item/share-folder-list-item.module'
import { JobListItemModule } from '../ui/job-list-item/job-list-item.module'
import { RouterModule } from '@angular/router'
import { NameModule } from 'src/app/shared/ui/name/name.module'
import { LoadingFolderModule } from '../ui/loading-folder/loading-folder.module'
import { LoadingJobModule } from '../ui/loading-job/loading-job.module'

@NgModule({
  declarations: [StudyJobListComponent],
  exports: [StudyJobListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    ChooseFolderModule,
    JobListItemModule,
    CreateShareFolderModule,
    ShareFolderListItemModule,
    RouterModule,
    NameModule,
    LoadingFolderModule,
    LoadingJobModule,
  ],
})
export class StudyJobListModule {}
