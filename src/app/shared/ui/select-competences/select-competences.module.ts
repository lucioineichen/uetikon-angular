import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectCompetencesComponent } from './select-competences.component'
import { TopicSelectComponent } from './topic/topic.component'
import { MaterialModule } from '../material.module'
import { SelectedSubjectComponent } from './selected-subject/selected-subject.component'
import { AllSubjectsComponent } from './all-subjects/all-subjects.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    SelectCompetencesComponent,
    TopicSelectComponent,
    SelectedSubjectComponent,
    AllSubjectsComponent,
  ],
  exports: [SelectCompetencesComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectCompetencesModule {}
