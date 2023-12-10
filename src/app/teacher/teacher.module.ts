import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component'
import { MaterialModule } from '../material.module'
import { TeacherCourseCreatorDialogComponent } from './teacher-courses/teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TeacherCourseComponent } from './teacher-course/teacher-course.component'
import { TeacherComponent } from './teacher.component'
import { ChooseStudyJobsDialogComponent } from './choose-study-jobs-dialog/choose-study-jobs-dialog.component'
import { TeacherStudyJobsComponent } from './study-jobs/study-jobs.component'
import { TeacherCreateStudyJobDialogComponent } from './teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component'
import { SelectCompetencesComponent } from './select-competences-form/select-competences-form.component'
import { UiModule } from '../ui.module'
import { StudyJobDialogComponent } from './study-job-dialog/study-job-dialog.component'
import { FolderContentComponent } from './study-jobs/folder-content/folder-content.component'
import { TreeComponent } from './study-jobs/tree/tree.component'
import { FolderComponent } from './folder/folder.component'
import { StudyJobDisplayComponent } from './study-jobs/folder-content/study-job-display/study-job-display.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { JobComponent } from './job/job.component'
import { StudyPathComponent } from './study-path/study-path.component'
import { StudyPathFormComponent } from './study-path/study-path-form/study-path-form.component'
import { SelectJobsComponent } from './select-jobs/select-jobs.component'
import { StudentParticipantComponent } from './teacher-course/student-participant/student-participant.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectFormComponent } from './projects/project-form/project-form.component'
import { SelectCourseComponent } from './projects/select-course/select-course.component'
import { SelectJobFromCourseComponent } from './projects/select-course/select-job-from-course/select-job-from-course.component'
import { ProjectComponent } from './project/project.component'
import { StudentsComponent } from './students/students.component'
import { StudentComponent } from './student/student.component'
import { HttpClientModule } from '@angular/common/http'
import { SelectUfkComponent } from './select-ufk/ufk.component'
import { ClassControlComponent } from './ufk/class-control/class-control.component'
import { StudentControlComponent } from './ufk/student-control/student-control.component'
import { TeacherControlComponent } from './ufk/teacher-control/teacher-control.component'
import { SubjectControlComponent } from './ufk/subject-control/subject-control.component'
import { UfkControlComponent } from './ufk/ufk-control/ufk-control.component'
import { UfkComponent } from './ufk/ufk.component'
import { UfkTableComponent } from './ufk/ufk-table/ufk-table.component'
import { AddUfkComponent } from './ufk/add-ufk/add-ufk.component'
import { GradePipe } from './ufk/ufk-table/grade.pipe'
import { SubjectsComponent } from './ufk/add-ufk/subjects/subjects.component'
import { SelectUfkStudentsComponent } from './ufk/add-ufk/students/students.component'
import { JobListItemComponent } from './study-jobs/job-list-item/job-list-item.component'
import { AddStudyJobComponent } from './study-jobs/add-study-job/add-study-job.component'
import { CompetencesControlComponent } from './ui/competences-control/competences-control.component'
import { AddTaskControlComponent } from './ui/add-task-control/add-task-control.component'
import { FolderListItemComponent } from './study-jobs/folder-list-item/folder-list-item.component'
import { CompetencesComponent } from './competences/competences.component';
import { CompetencesTableComponent } from './competences/competences-table/competences-table.component'

@NgModule({
  declarations: [
    TeacherCoursesComponent,
    TeacherCourseCreatorDialogComponent,
    TeacherCourseComponent,
    TeacherComponent,
    ChooseStudyJobsDialogComponent,
    TeacherStudyJobsComponent,
    TeacherCreateStudyJobDialogComponent,
    AddTaskDialogComponent,
    SelectCompetencesComponent,
    StudyJobDialogComponent,
    FolderContentComponent,
    TreeComponent,
    FolderComponent,
    StudyJobDisplayComponent,
    JobComponent,
    StudyPathComponent,
    StudyPathFormComponent,
    SelectJobsComponent,
    StudentParticipantComponent,
    ProjectsComponent,
    ProjectFormComponent,
    SelectCourseComponent,
    SelectJobFromCourseComponent,
    ProjectComponent,
    StudentsComponent,
    StudentComponent,
    SelectUfkComponent,
    ClassControlComponent,
    StudentControlComponent,
    TeacherControlComponent,
    SubjectControlComponent,
    UfkControlComponent,
    UfkComponent,
    UfkTableComponent,
    AddUfkComponent,
    GradePipe,
    SubjectsComponent,
    SelectUfkStudentsComponent,
    JobListItemComponent,
    AddStudyJobComponent,
    CompetencesControlComponent,
    AddTaskControlComponent,
    FolderListItemComponent,
    CompetencesComponent,
    CompetencesTableComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
})
export class TeacherModule {}
