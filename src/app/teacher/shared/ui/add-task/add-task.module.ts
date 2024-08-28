import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddTaskComponent } from './add-task-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { FileUploadModule } from 'src/app/shared/ui/file-upload/file-upload.module'

@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
})
export class AddTaskModule {}
