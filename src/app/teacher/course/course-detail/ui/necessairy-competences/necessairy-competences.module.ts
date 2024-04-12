import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NecessairyCompetencesComponent } from './necessairy-competences.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [NecessairyCompetencesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NecessairyCompetencesComponent],
})
export class NecessairyCompetencesModule {}
