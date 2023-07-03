import { NgModule } from '@angular/core'

import { StudyJobExpectationComponent } from './ui/study-job-expectation/study-job-expectation.component'
import { MaterialModule } from './material.module'
import { FileUploadComponent } from './ui/file-upload/file-upload.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [StudyJobExpectationComponent, FileUploadComponent],
  imports: [CommonModule, MaterialModule],
  exports: [StudyJobExpectationComponent, FileUploadComponent],
})
export class UiModule {}
