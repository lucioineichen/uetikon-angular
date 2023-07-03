import { Component, OnInit } from '@angular/core'
import { TeacherService } from '../teacher.service'
import { ReplaySubject, catchError, mergeMap, tap } from 'rxjs'
import { IRepositoryFolder } from 'src/app/interfaces'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCreateStudyJobDialogComponent } from '../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'

@Component({
  selector: 'app-teacher-study-jobs',
  templateUrl: './teacher-study-jobs.component.html',
  styleUrls: ['./teacher-study-jobs.component.css'],
})
export class TeacherStudyJobsComponent implements OnInit {
  tree$: ReplaySubject<IRepositoryFolder>
  isError = false

  constructor(
    private teacherService: TeacherService,
    private uiService: UiService,
    private dialog: MatDialog
  ) {
    this.tree$ = this.teacherService.repositoryTree$
    this.tree$
      .pipe(
        tap((tree) => {
          if (tree.repositoryFolders.length === 0) {
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
    this.teacherService.updaterepositoryTree()
  }

  openStudyJobCreator() {
    const dialogRef = this.dialog.open(TeacherCreateStudyJobDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(tap(console.log), mergeMap(this.teacherService.createStudyJob))
      .subscribe({
        next: this.teacherService.updaterepositoryTree,
        error: (err) => {
          this.uiService.showToast('LernJob Konnte nicht erstellt werden')
        },
      })
  }
}
