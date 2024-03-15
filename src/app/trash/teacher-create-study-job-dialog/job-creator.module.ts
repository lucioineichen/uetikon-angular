import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobCreatorComponent } from './teacher-create-study-job-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [JobCreatorComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class JobCreatorModule {}
