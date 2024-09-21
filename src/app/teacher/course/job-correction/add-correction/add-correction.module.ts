import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddCorrectionComponent } from './add-correction.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FileUploadModule } from 'src/app/shared/ui/file-upload/file-upload.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AddCorrectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FileUploadModule,
    ReactiveFormsModule,
  ],
})
export class AddCorrectionModule {}
