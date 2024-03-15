import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetencesControlComponent } from './competences-control.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [CompetencesControlComponent],
  exports: [CompetencesControlComponent],
  imports: [CommonModule, MaterialModule],
})
export class CompetencesControlModule {}
