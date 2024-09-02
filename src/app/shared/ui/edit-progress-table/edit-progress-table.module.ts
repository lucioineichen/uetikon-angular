import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditProgressTableComponent } from './edit-progress-table.component'
import { MaterialModule } from '../material.module'
import { EditTaskProgressTableModule } from '../edit-task-progress-table/edit-task-progress-table.module'

@NgModule({
  declarations: [EditProgressTableComponent],
  imports: [CommonModule, MaterialModule, EditTaskProgressTableModule],
  exports: [EditProgressTableComponent],
})
export class EditProgressTableModule {}
