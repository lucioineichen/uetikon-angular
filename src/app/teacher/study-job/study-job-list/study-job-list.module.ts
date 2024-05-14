import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudyJobListComponent } from './study-jobs.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FolderListItemModule } from '../ui/folder-list-item/folder-list-item.module'
import { JobListItemModule } from '../ui/job-list-item/job-list-item.module'
import { ChooseFolderModule } from 'src/app/shared/ui/choose-folder/choose-folder.module'

@NgModule({
  declarations: [StudyJobListComponent],
  exports: [StudyJobListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    JobListItemModule,
    ChooseFolderModule,
  ],
})
export class StudyJobListModule {}
