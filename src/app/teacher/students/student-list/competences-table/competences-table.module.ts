import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetencesTableComponent } from './competences-table.component'
import { CompetenceTableModule } from 'src/app/shared/ui/competence-table/competence-table.module'

@NgModule({
  declarations: [CompetencesTableComponent],
  exports: [CompetencesTableComponent],
  imports: [CommonModule, CompetenceTableModule],
})
export class CompetencesTableModule {}
