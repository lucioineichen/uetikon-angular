import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectCompetencesFormComponent } from './select-competences-form.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectedSubjectComponent } from './selected-subject/selected-subject.component'
import { TopicSelectComponent } from './topic/topic.component'
import { AllSubjectsComponent } from './all-subjects/all-subjects.component'
// import { AllSubjectsComponent } from './all-subjects_/all-subjects.component'

@NgModule({
  declarations: [
    SelectCompetencesFormComponent,
    SelectedSubjectComponent,
    AllSubjectsComponent,
    TopicSelectComponent,
  ],
  exports: [SelectCompetencesFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectCompetencesModule {}
