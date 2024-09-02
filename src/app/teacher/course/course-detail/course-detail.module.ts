import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseDetailComponent } from './teacher-course.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ChatModule } from 'src/app/shared/ui/chat/chat.module'
import { CompetenceTableModule } from 'src/app/shared/ui/competence-table/competence-table.module'
import { ChooseJobModule } from '../../shared/ui/choose-job/choose-job.module'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { NecessairyCompetencesModule } from './ui/necessairy-competences/necessairy-competences.module'
import { JobChoicesModule } from './ui/job-choices/job-choices.module'
import { MandetoryJobModule } from './ui/mandetory-job/mandetory-job.module'
import { CreateMandetoryModule } from './ui/create-mandetory/create-mandetory.module'
import { CreateChoiceComponent } from './ui/create-choice/create-choice.component'
import { CreateChoiceModule } from './ui/create-choice/create-choice.module'
import { CreateCompetenceContainerModule } from './ui/create-competence-container/create-competence-container.module'
import { EditCourseModule } from './ui/edit-course/edit-course.module'
import { RouterModule } from '@angular/router'
import { JobProgressTableModule } from 'src/app/shared/ui/job-progress-table/job-progress-table.module'
import { TaskProgressTableModule } from 'src/app/shared/ui/task-progress-table/task-progress-table.module'

@NgModule({
  declarations: [CourseDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChatModule,
    CompetenceTableModule,
    ChooseJobModule,
    AddButtonModule,
    ChooseJobModule,
    NecessairyCompetencesModule,
    JobChoicesModule,
    MandetoryJobModule,
    CreateMandetoryModule,
    CreateChoiceModule,
    CreateCompetenceContainerModule,
    EditCourseModule,
    RouterModule,
    JobProgressTableModule,
    TaskProgressTableModule,
  ],
})
export class CourseDetailModule {}
