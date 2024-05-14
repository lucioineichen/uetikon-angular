import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetenceContainerComponent } from './competence-container.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { MandetoryJobModule } from '../../../course-detail/ui/mandetory-job/mandetory-job.module'

@NgModule({
  declarations: [CompetenceContainerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CompetenceContainerComponent],
})
export class CompetenceContainerModule {}
