import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContainerDetailComponent } from './container-detail.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { TaskModule } from 'src/app/shared/ui/task/task.module'
import { MandetoryJobModule } from '../course-detail/ui/mandetory-job/mandetory-job.module'
import { ChooseDependencyModule } from '../../shared/ui/choose-dependency/choose-dependency.module'
import { JobChoicesModule } from '../course-detail/ui/job-choices/job-choices.module'
import { NecessairyCompetencesModule } from '../course-detail/ui/necessairy-competences/necessairy-competences.module'
import { ConfirmDeleteModule } from 'src/app/shared/ui/confirm-delete/confirm-delete.module'
import { JobContainerModule } from './ui/job-container/job-container.module'
import { CompetenceContainerModule } from './ui/competence-container/competence-container.module'
import { ChoiceContainerModule } from './ui/choice-container/choice-container.module'

@NgModule({
  declarations: [ContainerDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TaskModule,
    MandetoryJobModule,
    ChooseDependencyModule,
    JobChoicesModule,
    NecessairyCompetencesModule,
    ConfirmDeleteModule,
    JobContainerModule,
    CompetenceContainerModule,
    ChoiceContainerModule,
  ],
})
export class ContainerDetailModule {}
