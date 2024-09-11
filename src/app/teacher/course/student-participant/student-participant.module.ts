import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentParticipantComponent } from './student-participant.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FileModule } from 'src/app/shared/ui/file/file.module'
import { CommitContainerModule } from 'src/app/shared/ui/commit-container/commit-container.module'
import { CompetenceListBySubjectModule } from 'src/app/shared/ui/competence-list-by-subject/competence-list-by-subject.module'
import { SetGradeModule } from 'src/app/shared/ui/set-grade/set-grade.module'
import { CompetenceTableModule } from 'src/app/shared/ui/competence-table/competence-table.module'
import { ProgressTableModule } from 'src/app/shared/ui/progress-table/progress-table.module'
import { EditProgressTableModule } from 'src/app/shared/ui/edit-progress-table/edit-progress-table.module'
import { StudyPathModule } from 'src/app/student/course/ui/study-path/study-path.module'

@NgModule({
  declarations: [StudentParticipantComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommitContainerModule,
    CompetenceListBySubjectModule,
    SetGradeModule,
    CompetenceTableModule,
    EditProgressTableModule,
    StudyPathModule,
  ],
})
export class StudentParticipantModule {}
