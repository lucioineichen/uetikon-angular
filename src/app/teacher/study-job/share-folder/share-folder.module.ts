import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShareFolderComponent } from './share-folder.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FolderListItemModule } from '../ui/folder-list-item/folder-list-item.module'
import { JobListItemModule } from '../ui/job-list-item/job-list-item.module'
import { RouterModule } from '@angular/router'
import { ParticipatingTeacherListComponent } from './participating-teacher-list/participating-teacher-list.component'
import { NameModule } from 'src/app/shared/ui/name/name.module'
import { ChooseFolderModule } from 'src/app/shared/ui/choose-folder/choose-folder.module'
import { ChooseTeacherDialogModule } from 'src/app/shared/ui/choose-teacher-dialog/choose-teacher-dialog.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [ShareFolderComponent, ParticipatingTeacherListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FolderListItemModule,
    JobListItemModule,
    RouterModule,
    NameModule,
    ChooseFolderModule,
    ChooseTeacherDialogModule,
    ToolbarModule,
  ],
})
export class ShareFolderModule {}
