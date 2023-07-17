import { Component, OnInit } from '@angular/core'
import { TeacherService } from '../teacher.service'
import { Subject, catchError, filter, mergeMap, tap } from 'rxjs'
import { IFolder, IStudyJob } from 'src/app/interfaces'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCreateStudyJobDialogComponent } from '../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { StudyJobDialogComponent } from '../study-job-dialog/study-job-dialog.component'
import { getNewFolderNumber, isNewFolder } from 'src/app/folder'

@Component({
  selector: 'app-study-jobs',
  templateUrl: './study-jobs.component.html',
  styleUrls: ['./study-jobs.component.css'],
})
export class TeacherStudyJobsComponent implements OnInit {
  tree$: Subject<IFolder>
  isError = false

  constructor(
    private teacherService: TeacherService,
    private uiService: UiService,
    private dialog: MatDialog
  ) {
    this.tree$ = this.teacherService.tree$
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

  openFolder() {}

  addFolder() {
    this.tree$
      .subscribe((folder) => {
        const number =
          folder.folders.reduce((previousValue, currentFolder) => {
            return getNewFolderNumber(currentFolder.name) > previousValue
              ? getNewFolderNumber(currentFolder.name)
              : previousValue
          }, 0) + 1

        const newFolder = {
          _id: 0,
          name: `Neuer Ordner (${number})`,
          folders: [],
          studyJobs: [],
        }

        folder.folders.push(newFolder)
      })
      .unsubscribe()
  }

  openJob(job: IStudyJob) {
    this.dialog.open(StudyJobDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: job,
    })
  }

  ngOnInit(): void {
    this.teacherService.updaterepositoryTree()
  }

  openStudyJobCreator() {
    const dialogRef = this.dialog.open(TeacherCreateStudyJobDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data),
        mergeMap((data) => this.teacherService.createStudyJob(data))
      )
      .subscribe({
        next: () => this.teacherService.updaterepositoryTree(),
        error: (err) => {
          this.uiService.showToast('LernJob Konnte nicht erstellt werden')
        },
      })
  }
}
