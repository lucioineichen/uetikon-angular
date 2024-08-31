import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetenceListBySubjectComponent } from './competence-list-by-subject.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [CompetenceListBySubjectComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CompetenceListBySubjectComponent],
})
export class CompetenceListBySubjectModule {}
