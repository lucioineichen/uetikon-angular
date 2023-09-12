import { Component, HostListener, OnInit } from '@angular/core'
import { ReplaySubject, Subject, catchError, filter, mergeMap, tap } from 'rxjs'
import { IFolder, IStudyJob } from 'src/app/interfaces'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCreateStudyJobDialogComponent } from '../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { StudyJobDialogComponent } from '../study-job-dialog/study-job-dialog.component'
import { getNewFolderNumber, isNewFolder } from 'src/app/folder'
import { StudyJobsService } from './study-jobs.service'

@Component({
  selector: 'app-study-jobs',
  templateUrl: './study-jobs.component.html',
  styleUrls: [],
})
export class TeacherStudyJobsComponent implements OnInit {
  tree$: ReplaySubject<IFolder>
  isError = false

  constructor(
    private studyJobsService: StudyJobsService,
    private uiService: UiService,
    private dialog: MatDialog
  ) {
    this.tree$ = this.studyJobsService.tree$
    this.tree$
      .pipe(
        tap((tree) => {
          if (tree.folders.length + tree.studyJobs.length === 0) {
            this.uiService.showToast('Es gibt noch keine LernJobs')
          }
        }),
        catchError((err, caugt) => {
          this.isError = true
          return err
        })
      )
      .subscribe()
  }

  ngOnInit(): void {
    this.studyJobsService.updaterepositoryTree()
  }
}
