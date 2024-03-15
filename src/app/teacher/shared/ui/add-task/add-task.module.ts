import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddTaskComponent } from './add-task-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AddTaskComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class AddTaskModule {}
