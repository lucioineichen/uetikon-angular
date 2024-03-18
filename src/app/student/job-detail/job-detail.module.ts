import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobDetialComponent } from './study-job.component'
import { TaskComponent } from './ui/task/task.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FileModule } from 'src/app/shared/ui/file/file.module'

@NgModule({
  declarations: [JobDetialComponent, TaskComponent],
  imports: [CommonModule, MaterialModule, FileModule],
})
export class JobDetailModule {}
