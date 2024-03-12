import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RenameFolderComponent } from './rename-folder.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [RenameFolderComponent],
  exports: [RenameFolderComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class RenameFolderModule {}
