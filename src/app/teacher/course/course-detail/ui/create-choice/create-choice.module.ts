import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { CreateChoiceComponent } from './create-choice.component'
import { ReactiveFormsModule } from '@angular/forms'
import { JobSummaryModule } from 'src/app/shared/ui/job-summary/job-summary.module'

@NgModule({
  declarations: [CreateChoiceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    JobSummaryModule,
  ],
})
export class CreateChoiceModule {}
