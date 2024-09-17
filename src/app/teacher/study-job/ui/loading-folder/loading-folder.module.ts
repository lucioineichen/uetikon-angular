import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingFolderComponent } from './loading-folder.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [LoadingFolderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingFolderComponent],
})
export class LoadingFolderModule {}
