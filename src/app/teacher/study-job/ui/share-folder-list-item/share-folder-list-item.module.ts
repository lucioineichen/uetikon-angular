import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShareFolderListItemComponent } from './share-folder-list-item.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [ShareFolderListItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ShareFolderListItemComponent],
})
export class ShareFolderListItemModule {}
