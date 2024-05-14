import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChoiceContainerComponent } from './choice-container.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { MandetoryJobModule } from '../../../course-detail/ui/mandetory-job/mandetory-job.module'
import { ConfirmDeleteModule } from 'src/app/shared/ui/confirm-delete/confirm-delete.module'

@NgModule({
  declarations: [ChoiceContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MandetoryJobModule,
    ConfirmDeleteModule,
  ],
  exports: [ChoiceContainerComponent],
})
export class ChoiceContainerModule {}
