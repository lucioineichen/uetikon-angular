import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseDetailComponent } from './teacher-course.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ChatModule } from 'src/app/shared/ui/chat/chat.module'
import { CompetenceTableModule } from 'src/app/shared/ui/competence-table/competence-table.module'
import { ChooseJobModule } from '../../shared/ui/choose-job/choose-job.module'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'

@NgModule({
  declarations: [CourseDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChatModule,
    CompetenceTableModule,
    ChooseJobModule,
    AddButtonModule
  ],
})
export class CourseDetailModule {}
