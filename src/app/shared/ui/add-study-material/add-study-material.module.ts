import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudyMaterialComponent } from './add-study-material.component';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    AddStudyMaterialComponent
  ],
  imports: [
    CommonModule, FileUploadModule, MaterialModule
  ]
})
export class AddStudyMaterialModule { }
