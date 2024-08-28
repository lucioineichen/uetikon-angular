import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobControlComponent } from './job-control.component'
import { ChooseJobModule } from '../choose-job/choose-job.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [JobControlComponent],
  imports: [CommonModule, ChooseJobModule, ReactiveFormsModule, MaterialModule],
  exports: [JobControlComponent],
})
export class JobControlModule {}
