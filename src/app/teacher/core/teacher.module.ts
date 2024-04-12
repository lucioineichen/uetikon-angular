import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { MaterialModule } from '../../shared/ui/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TeacherComponent } from './teacher.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http'
import { GradePipe } from '../ufk/ui/ufk-table/grade.pipe'
import { ChatModule } from '../../shared/ui/chat/chat.module'
import { CompetenceTableModule } from '../../shared/ui/competence-table/competence-table.module'
import { AddButtonModule } from '../../shared/ui/add-button/add-button.module'
import { FileModule } from '../../shared/ui/file/file.module'
import { RenameFolderModule } from '../../shared/ui/rename-folder/rename-folder.module'
import { TaskModule } from '../../shared/ui/task/task.module'
import { SelectCompetencesModule } from '../../shared/ui/select-competences/select-competences.module'
import { AddTaskControlModule } from '../shared/ui/add-task-control/add-task-control.module'
import { CompetencesControlModule } from '../shared/ui/competences-control/competences-control.module'
import { StudyJobListModule } from '../study-job/study-job-list/study-job-list.module'
import { FolderModule } from '../study-job/folder/folder.module'
import { UfkModule } from '../ufk/ufk.module'
import { JobModule } from '../study-job/job/job.module'
import { StudentDetailModule } from '../students/student-detail/student-detail.module'
import { StudentListModule } from '../students/student-list/competences.module'
import { CourseDetailModule } from '../course/course-detail/course-detail.module'
import { CourseListModule } from '../course/course-list/course-list.module'

@NgModule({
  declarations: [TeacherComponent, GradePipe],
  imports: [
    FolderModule,
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ChatModule,
    CompetenceTableModule,
    AddButtonModule,
    FileModule,
    RenameFolderModule,
    TaskModule,
    SelectCompetencesModule,
    AddTaskControlModule,
    CompetencesControlModule,
    StudyJobListModule,
    UfkModule,
    StudentListModule,
    JobModule,
    StudentDetailModule,
    CourseDetailModule,
    CourseListModule,
  ],
})
export class TeacherModule {}
