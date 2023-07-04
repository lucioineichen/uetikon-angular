import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { MaterialModule } from '../material.module'
import { TeacherCourseCreatorDialogComponent } from './teacher-courses/teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddStudentsDialogComponent } from './add-students-dialog/add-students-dialog.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'
import { TeacherComponent } from './teacher.component'
import { UiModule } from '../ui.module'
import { ChooseStudyJobsDialogComponent } from './choose-study-jobs-dialog/choose-study-jobs-dialog.component'
import { TeacherStudyJobsComponent } from './teacher-study-jobs/teacher-study-jobs.component'
import { TeacherCreateStudyJobDialogComponent } from './teacher-create-study-job-dialog/teacher-create-study-job-dialog.component';
import { TeacherAddTaskDialogComponent } from './teacher-add-task-dialog/teacher-add-task-dialog.component';
import { TeacherChooseCompetencesDialogComponent } from './teacher-choose-competences-dialog/teacher-choose-competences-dialog.component';
import { TeacherRepositoryDialogComponent } from './teacher-repository-dialog/teacher-repository-dialog.component'

@NgModule({
  declarations: [
    TeacherHomeComponent,
    TeacherCoursesComponent,
    TeacherCourseCreatorDialogComponent,
    AddStudentsDialogComponent,
    TeacherCourseComponent,
    TeacherComponent,
    ChooseStudyJobsDialogComponent,
    TeacherStudyJobsComponent,
    TeacherCreateStudyJobDialogComponent,
    TeacherAddTaskDialogComponent,
    TeacherChooseCompetencesDialogComponent,
    TeacherRepositoryDialogComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
  ],
})
export class TeacherModule {}
