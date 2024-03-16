import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FolderListItemComponent } from './folder-list-item.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [FolderListItemComponent],
  exports: [FolderListItemComponent],
  imports: [CommonModule, MaterialModule],
})
export class FolderListItemModule {}
