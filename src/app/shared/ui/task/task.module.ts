import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module'
import { TaskComponent } from './task.component'
import { FileModule } from '../file/file.module'

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [CommonModule, MaterialModule, FileModule],
})
export class TaskModule {}
