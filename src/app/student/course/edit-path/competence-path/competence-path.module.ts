import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetencePathComponent } from './competence-path.component'
import { AddCompetencePathModule } from './add-competence-path/add-competence-path.module'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ConfirmDeleteModule } from 'src/app/shared/ui/confirm-delete/confirm-delete.module'

@NgModule({
  declarations: [CompetencePathComponent],
  imports: [CommonModule, AddCompetencePathModule, MaterialModule, ConfirmDeleteModule],
  exports: [CompetencePathComponent],
})
export class CompetencePathModule {}
