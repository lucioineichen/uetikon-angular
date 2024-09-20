import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubmissionComponent } from './add-submission.component';
import { FileUploadModule } from 'src/app/shared/ui/file-upload/file-upload.module';
import { MaterialModule } from 'src/app/shared/ui/material.module';



@NgModule({
  declarations: [
    AddSubmissionComponent
  ],
  imports: [
    CommonModule, FileUploadModule, MaterialModule
  ]
})
export class AddSubmissionModule { }
