import { Component, OnInit } from '@angular/core'
import { TeacherService } from '../teacher.service'
import { ReplaySubject, catchError, mergeMap, tap } from 'rxjs'
import { IRepository, IRepositoryFolder } from 'src/app/interfaces'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCreateStudyJobDialogComponent } from '../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { TeacherRepositoryDialogComponent } from '../teacher-repository-dialog/teacher-repository-dialog.component'

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
          if (tree.repositoryFolders.length + tree.repositories.length === 0) {
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

  openFolder() {}

  openRepo(repo: IRepository) {
    this.dialog.open(TeacherRepositoryDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: repo,
    })
  }

  ngOnInit(): void {
    this.teacherService.updaterepositoryTree()
  }

  openStudyJobCreator() {
    const dialogRef = this.dialog.open(TeacherCreateStudyJobDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(mergeMap((data) => this.teacherService.createStudyJob(data)))
      .subscribe({
        next: () => this.teacherService.updaterepositoryTree(),
        error: (err) => {
          this.uiService.showToast('LernJob Konnte nicht erstellt werden')
        },
      })
  }
}
