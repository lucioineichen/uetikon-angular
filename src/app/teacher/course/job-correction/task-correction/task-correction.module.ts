import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskCorrectionComponent } from './task-correction.component'
import { FileModule } from 'src/app/shared/ui/file/file.module'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { AddCorrectionModule } from '../add-correction/add-correction.module'

@NgModule({
  declarations: [TaskCorrectionComponent],
  imports: [CommonModule, FileModule, MaterialModule, AddCorrectionModule],
  exports: [TaskCorrectionComponent],
})
export class TaskCorrectionModule {}
