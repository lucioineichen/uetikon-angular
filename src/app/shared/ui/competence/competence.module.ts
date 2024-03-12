import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module'
import { CompetenceComponent } from './competence.component'

@NgModule({
  declarations: [CompetenceComponent],
  exports: [CompetenceComponent],
  imports: [CommonModule, MaterialModule],
})
export class CompetenceModule {}
