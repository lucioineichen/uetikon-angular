import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditPathComponent } from './edit-path.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { NecessairyCompetencesModule } from 'src/app/teacher/course/course-detail/ui/necessairy-competences/necessairy-competences.module'
import { JobChoicesModule } from 'src/app/teacher/course/course-detail/ui/job-choices/job-choices.module'
import { MandetoryPathModule } from './mandetory-path/mandetory-path.module'
import { ChoicePathModule } from './choice-path/choice-path.module'
import { CompetencePathModule } from './competence-path/competence-path.module'

@NgModule({
  declarations: [EditPathComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MandetoryPathModule,
    CompetencePathModule,
    ChoicePathModule,
  ],
})
export class EditPathModule {}
