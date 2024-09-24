import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetencesComponent } from './competences.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { TopicModule } from 'src/app/shared/ui/topic/topic.module'
import { SubTopicModule } from 'src/app/shared/ui/sub-topic/sub-topic.module'
import { CompetenceModule } from 'src/app/shared/ui/competence/competence.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [CompetencesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TopicModule,
    SubTopicModule,
    CompetenceModule,
    ToolbarModule,
  ],
})
export class CompetencesModule {}
