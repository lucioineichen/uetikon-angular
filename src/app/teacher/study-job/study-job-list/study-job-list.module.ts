import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudyJobListComponent } from './study-jobs.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FolderListItemModule } from '../ui/folder-list-item/folder-list-item.module'
import { ChooseFolderModule } from 'src/app/shared/ui/choose-folder/choose-folder.module'
import { JobListItemModule } from '../folder/job-list-item/job-list-item.module';
import { ShareFolderListItemComponent } from './share-folder-list-item/share-folder-list-item.component'

@NgModule({
  declarations: [StudyJobListComponent, ShareFolderListItemComponent],
  exports: [StudyJobListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    ChooseFolderModule,
    JobListItemModule,
  ],
})
export class StudyJobListModule {}
