import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module'
import { TaskComponent } from './task.component'

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [CommonModule, MaterialModule],
})
export class TaskModule {}
