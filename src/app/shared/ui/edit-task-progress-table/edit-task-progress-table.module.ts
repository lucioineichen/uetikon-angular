import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditTaskProgressTableComponent } from './edit-task-progress-table.component'
import { MaterialModule } from '../material.module'
import { EnterTaskProgressModule } from '../enter-task-progress/enter-task-progress.module'

@NgModule({
  declarations: [EditTaskProgressTableComponent],
  imports: [CommonModule, MaterialModule, EnterTaskProgressModule],
  exports: [EditTaskProgressTableComponent],
})
export class EditTaskProgressTableModule {}
