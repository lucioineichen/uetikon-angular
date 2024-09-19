import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskProgressComponent } from './task-progress.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FileModule } from 'src/app/shared/ui/file/file.module'

@NgModule({
  declarations: [TaskProgressComponent],
  imports: [CommonModule, MaterialModule, FileModule],
  exports: [TaskProgressComponent],
})
export class TaskProgressModule {}
