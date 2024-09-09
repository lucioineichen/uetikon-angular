import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { StudentCourseComponent } from './student-course.component'
import { JobProgressTableModule } from 'src/app/shared/ui/job-progress-table/job-progress-table.module'
import { MandetoryJobModule } from 'src/app/teacher/course/course-detail/ui/mandetory-job/mandetory-job.module'
import { JobChoicesModule } from 'src/app/teacher/course/course-detail/ui/job-choices/job-choices.module'
import { NecessairyCompetencesModule } from 'src/app/teacher/course/course-detail/ui/necessairy-competences/necessairy-competences.module'
import { StudyPathModule } from '../ui/study-path/study-path.module'

@NgModule({
  declarations: [StudentCourseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    JobProgressTableModule,
    MandetoryJobModule,
    JobChoicesModule,
    NecessairyCompetencesModule,
    StudyPathModule,
  ],
})
export class CourseDetailModule {}
