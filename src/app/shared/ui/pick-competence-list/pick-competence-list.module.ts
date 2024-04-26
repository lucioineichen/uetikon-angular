import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PickCompetenceListComponent } from './pick-competence-list.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { CompetenceComponent } from './competence/competence.component'
import { SubTopicComponent } from './sub-topic/sub-topic.component'
import { SelectSubjectModule } from '../select-subject/select-subject.module'
import { AllSubjectsComponent } from './all-subjects/all-subjects.component';
import { TopicComponent } from './topic/topic.component'

@NgModule({
  declarations: [
    PickCompetenceListComponent,
    CompetenceComponent,
    SubTopicComponent,
    AllSubjectsComponent,
    TopicComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectSubjectModule,
  ],
})
export class PickCompetenceListModule {}
