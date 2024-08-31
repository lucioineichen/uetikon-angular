import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommitContainerComponent } from './commit-container.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { CompetenceListBySubjectModule } from '../competence-list-by-subject/competence-list-by-subject.module'

@NgModule({
  declarations: [CommitContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CompetenceListBySubjectModule,
  ],
})
export class CommitContainerModule {}
