import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddTaskControlComponent } from './add-task-control.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [AddTaskControlComponent],
  exports: [AddTaskControlComponent],
  imports: [CommonModule, MaterialModule],
})
export class AddTaskControlModule {}
