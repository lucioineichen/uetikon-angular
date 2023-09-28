import { NgModule } from '@angular/core'
import { MaterialModule } from './material.module'
import { CommonModule } from '@angular/common'
import { TaskComponent } from './ui/task/task.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RenameFolderComponent } from './ui/rename-folder/rename-folder.component'
import { FileComponent } from './ui/file/file.component'
import { AddButtonComponent } from './ui/add-button/add-button.component'
import { TopicComponent } from './ui/topic/topic.component'
import { SubTopicComponent } from './ui/sub-topic/sub-topic.component'
import { CompetenceComponent } from './ui/competence/competence.component'
import { AsyncCompetencesComponent } from './ui/async-competences/async-competences.component'

const components = [
  TaskComponent,
  RenameFolderComponent,
  FileComponent,
  AddButtonComponent,
  TopicComponent,
  SubTopicComponent,
  CompetenceComponent,
  AsyncCompetencesComponent,
]

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: components,
  exports: components,
})
export class UiModule {}
