import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskFormComponent } from './task-form.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { FileUploadModule } from 'src/app/shared/ui/file-upload/file-upload.module'

@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  exports: [TaskFormComponent],
})
export class TaskFormModule {}
