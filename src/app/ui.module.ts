import { NgModule } from '@angular/core'
import { MaterialModule } from './material.module'
import { CommonModule } from '@angular/common'
import { TaskComponent } from './ui/task/task.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RenameFolderComponent } from './ui/rename-folder/rename-folder.component'
import { FileComponent } from './ui/file/file.component'

const components = [TaskComponent, RenameFolderComponent, FileComponent]

@NgModule({
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: components,
  exports: components,
})
export class UiModule {}
