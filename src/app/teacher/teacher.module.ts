import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { MaterialModule } from '../material.module'
import { TeacherCourseCreatorDialogComponent } from './teacher-courses/teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddStudentsDialogComponent } from './add-students-dialog/add-students-dialog.component'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'
import { TeacherComponent } from './teacher.component'
import { ChooseStudyJobsDialogComponent } from './choose-study-jobs-dialog/choose-study-jobs-dialog.component'
import { TeacherStudyJobsComponent } from './study-jobs/study-jobs.component'
import { TeacherCreateStudyJobDialogComponent } from './teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component'
import { TeacherChooseCompetencesDialogComponent } from './teacher-choose-competences-dialog/teacher-choose-competences-dialog.component'
import { UiModule } from '../ui.module'
import { StudyJobDialogComponent } from './study-job-dialog/study-job-dialog.component'
import { FolderContentComponent } from './study-jobs/folder-content/folder-content.component'
import { TreeComponent } from './study-jobs/tree/tree.component'
import { FolderComponent } from './folder/folder.component'
import { StudyJobDisplayComponent } from './study-jobs/folder-content/study-job-display/study-job-display.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { JobComponent } from './job/job.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudyPathComponent } from './study-path/study-path.component';
import { StudyPathFormComponent } from './study-path/study-path-form/study-path-form.component'

@NgModule({
  declarations: [
    TeacherCoursesComponent,
    TeacherCourseCreatorDialogComponent,
    AddStudentsDialogComponent,
    TeacherCourseComponent,
    TeacherComponent,
    ChooseStudyJobsDialogComponent,
    TeacherStudyJobsComponent,
    TeacherCreateStudyJobDialogComponent,
    AddTaskDialogComponent,
    TeacherChooseCompetencesDialogComponent,
    StudyJobDialogComponent,
    FolderContentComponent,
    TreeComponent,
    FolderComponent,
    StudyJobDisplayComponent,
    JobComponent,
    StudyPathComponent,
    StudyPathFormComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    FlexLayoutModule,
  ],
})
export class TeacherModule {}