import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CourseListComponent } from '../course/course-list/teacher-courses.component'
import { CourseDetailComponent } from '../course/course-detail/teacher-course.component'
import { FolderComponent } from '../study-job/folder/folder.component'
import { JobComponent } from '../study-job/job/job.component'
import { UfkComponent } from '../ufk/ufk.component'
import { StudentListComponent } from '../students/student-list/competences.component'
import { StudyJobListComponent } from '../study-job/study-job-list/study-jobs.component'
import { StudentDetailComponent } from '../students/student-detail/student.component'
import { ContainerDetailComponent } from '../course/container-detail/container-detail.component'
import { ShareFolderComponent } from '../study-job/share-folder/share-folder.component'
import { StudentParticipantComponent } from '../course/student-participant/student-participant.component'
import { EditPathComponent } from 'src/app/student/course/edit-path/edit-path.component'
import { JobCorrectionComponent } from '../course/job-correction/job-correction.component'

const routes: Routes = [
  { path: '', redirectTo: '/teacher/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  {
    path: 'courses/:courseId/containers/:containerId',
    component: ContainerDetailComponent,
  },
  { path: 'study-jobs/folder/:id', component: FolderComponent },
  {
    path: 'study-jobs/:id',
    component: JobComponent,
    data: {
      animation: 'modal',
    },
  },
  {
    path: 'student/:studentId/job/:jobId/correction',
    component: JobCorrectionComponent,
  },
  { path: 'study-jobs', component: StudyJobListComponent },
  // { path: 'students', component: StudentListComponent },
  { path: 'ufk', component: UfkComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'study-jobs/share-folder/:id', component: ShareFolderComponent },
  {
    path: 'courses/:courseId/student/:studentId',
    component: StudentParticipantComponent,
  },
  {
    path: 'course/:courseId/student/:studentId/edit-path',
    component: EditPathComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
