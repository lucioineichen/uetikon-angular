import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateMandetoryComponent } from './create-mandetory.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ChooseDependencyModule } from '../../../../shared/ui/choose-dependency/choose-dependency.module'
import { JobSummaryModule } from 'src/app/shared/ui/job-summary/job-summary.module'

@NgModule({
  declarations: [CreateMandetoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChooseDependencyModule,
    JobSummaryModule,
  ],
  exports: [CreateMandetoryComponent],
})
export class CreateMandetoryModule {}
