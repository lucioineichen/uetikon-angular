import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetencePathComponent } from './competence-path.component'
import { AddCompetencePathModule } from './add-competence-path/add-competence-path.module'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [CompetencePathComponent],
  imports: [CommonModule, AddCompetencePathModule, MaterialModule],
  exports: [CompetencePathComponent],
})
export class CompetencePathModule {}
