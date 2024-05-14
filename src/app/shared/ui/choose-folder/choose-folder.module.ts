import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChooseFolderComponent } from './choose-folder.component'
import { MaterialModule } from '../material.module'
import { FolderModule } from 'src/app/teacher/study-job/folder/folder.module'
import { JobListItemModule } from 'src/app/teacher/shared/ui/job-list-item/job-list-item.module'
import { FolderListItemModule } from 'src/app/teacher/shared/ui/folder-list-item/folder-list-item.module'

@NgModule({
  declarations: [ChooseFolderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    JobListItemModule,
  ],
})
export class ChooseFolderModule {}
